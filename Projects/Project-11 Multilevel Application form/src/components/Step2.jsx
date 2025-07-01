import React from 'react';

export default function Step2({ formData, handleChange, nextStep, prevStep }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.education || !formData.college) {
            alert("Please fill all fields.");
            return;
        }
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="text"
                name="education"
                placeholder="Highest Qualification"
                value={formData.education}
                onChange={handleChange}
            />
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="text"
                name="college"
                placeholder="College Name"
                value={formData.college}
                onChange={handleChange}
            />
            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                    Back
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Next
                </button>
            </div>
        </form>
    );
}
