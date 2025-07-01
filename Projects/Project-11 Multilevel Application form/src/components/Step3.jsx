import React from 'react';

export default function Step3({ formData, prevStep }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        console.log("Submitted Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
            <div className="mb-4">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Education:</strong> {formData.education}</p>
                <p><strong>College:</strong> {formData.college}</p>
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
                    Back
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Submit
                </button>
            </div>
        </form>
    );
}
