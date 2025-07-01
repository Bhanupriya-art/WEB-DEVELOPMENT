import React from 'react';

export default function Step1({ formData, handleChange, nextStep }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            alert("Please fill all fields.");
            return;
        }
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Next
            </button>
        </form>
    );
}
