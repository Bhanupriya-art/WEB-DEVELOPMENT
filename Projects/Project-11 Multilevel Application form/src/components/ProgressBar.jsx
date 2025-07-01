import React from 'react';

export default function ProgressBar({ step }) {
    const steps = ['Personal Info', 'Education', 'Review'];
    return (
        <div className="flex justify-between mb-6">
            {steps.map((label, index) => (
                <div key={index} className="flex flex-col items-center text-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step > index ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {index + 1}
                    </div>
                    <span className="mt-1">{label}</span>
                </div>
            ))}
        </div>
    );
}
