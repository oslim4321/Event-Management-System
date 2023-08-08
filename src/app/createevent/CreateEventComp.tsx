"use client"
import React, { ChangeEvent, useState } from 'react'

const CreateEventComp = () => {

    const [formData, setFormData] = useState({
        image: '',
        eventType: '',
        eventName: '',
        eventDate: '',
        eventLocation: '',
        brideName: '',
        groomName: '',
        tributeDetails: '',
        funeralProgram: '',
        celebrantName: '',
        age: '',
        musicianNames: '',
        musicGenre: '',
        // ... other fields
    });

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        // Send formData to your API endpoint
        console.log(formData);
    };


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Create Event</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Event Type</label>
                        <select
                            name="eventType"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            value={formData.eventType}
                            onChange={handleChange}
                        >
                            <option value="">Select Event Type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Musicial">Musicial</option>
                            <option value="Burial">Burial</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {/* Add other input fields here */}
                    <button
                        onClick={handleSubmit} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    );
};


export default CreateEventComp