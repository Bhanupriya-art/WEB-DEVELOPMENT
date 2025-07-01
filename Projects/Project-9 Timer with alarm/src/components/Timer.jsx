import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [minutes, setMinutes] = useState('');
    const [secondsInput, setSecondsInput] = useState('');
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [alarmShouldRing, setAlarmShouldRing] = useState(false);
    const [alarmPlaying, setAlarmPlaying] = useState(false);
    const alarmRef = useRef(null);

    useEffect(() => {
        let timer;
        if (running && totalSeconds > 0) {
            timer = setInterval(() => {
                setTotalSeconds((prev) => prev - 1);
            }, 1000);
        } else if (totalSeconds === 0 && running) {
            setRunning(false);
            if (alarmShouldRing && alarmRef.current) {
                alarmRef.current.play();
                setAlarmPlaying(true); 
            }
        }

        return () => clearInterval(timer);
    }, [running, totalSeconds, alarmShouldRing]);

    const formatTime = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        if (!running) {
            if (totalSeconds === 0) {
                const m = parseInt(minutes || '0');
                const s = parseInt(secondsInput || '0');
                const total = m * 60 + s;

                if (total <= 0) return;

                setTotalSeconds(total);
                setAlarmShouldRing(true);
            }
            setRunning(true);
        }
    };

    const handlePause = () => {
        setRunning(false);
    };

    const handleReset = () => {
        setRunning(false);
        setTotalSeconds(0);
        setMinutes('');
        setSecondsInput('');
        setAlarmShouldRing(false);
        stopAlarm();
    };

    const stopAlarm = () => {
        if (alarmRef.current) {
            alarmRef.current.pause();
            alarmRef.current.currentTime = 0;
        }
        setAlarmPlaying(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4">
            <div className="bg-white backdrop-blur-md bg-opacity-70 p-8 rounded-3xl shadow-2xl text-center w-full max-w-md border border-purple-200">
                <h1 className="text-5xl font-extrabold text-purple-700 mb-6 flex items-center justify-center gap-3">
                ⏰ Alarm Timer
                </h1>

                {!running && totalSeconds === 0 && (
                    <div className="flex gap-4 justify-center mb-4">
                        <input
                            type="number"
                            placeholder="Minutes"
                            value={minutes}
                            onChange={(e) => setMinutes(e.target.value)}
                            className="w-1/2 px-4 py-2 rounded-md border border-purple-300 shadow-inner text-center focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input
                            type="number"
                            placeholder="Seconds"
                            value={secondsInput}
                            onChange={(e) => setSecondsInput(e.target.value)}
                            className="w-1/2 px-4 py-2 rounded-md border border-purple-300 shadow-inner text-center focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                )}

                <div className="text-4xl font-mono text-gray-800 mb-6">{formatTime(totalSeconds)}</div>

                <div className="flex justify-center gap-4 flex-wrap">
                    {!running ? (
                        <button
                            onClick={handleStart}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition shadow-lg"
                        >
                            Start
                        </button>
                    ) : (
                        <button
                            onClick={handlePause}
                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full transition shadow-lg"
                        >
                            Pause
                        </button>
                    )}
                    <button
                        onClick={handleReset}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full transition shadow-lg"
                    >
                        Reset
                    </button>

                    {alarmPlaying && (
                        <button
                            onClick={stopAlarm}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition shadow-lg"
                        >
                            🔇 Stop Alarm
                        </button>
                    )}
                </div>

                <audio ref={alarmRef} src="/alarm.mp3" preload="auto" />
            </div>
        </div>
    );
};

export default Timer;
