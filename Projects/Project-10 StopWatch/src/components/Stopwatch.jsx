import React, { useState, useEffect } from 'react';
const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => setTime((prev) => prev + 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
    const formatTime = () => {
        const d = Math.floor(time / (60 * 60 * 24));
        const h = Math.floor((time / (60 * 60)) % 24);
        const m = Math.floor((time / 60) % 60);
        const s = Math.floor(time % 60);
        return `${d.toString().padStart(2, '0')}d : ${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-purple-700 flex items-center justify-center gap-2">
                    <span>⏱️</span> Stopwatch
                </h1>
                <p className="text-2xl font-mono text-gray-800 tracking-widest">{formatTime()}</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setRunning(!running)}
                        className={`px-6 py-2 rounded-full font-semibold text-white transition duration-300 ${running
                                ? 'bg-pink-500 hover:bg-pink-600'
                                : 'bg-indigo-500 hover:bg-indigo-600'
                            }`}
                    >
                        {running ? 'Pause' : 'Start'}
                    </button>
                    <button
                        onClick={() => {
                            setRunning(false);
                            setTime(0);
                        }}
                        className="px-6 py-2 rounded-full bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Stopwatch;
