"use client"
import React, { ChangeEvent, useState } from 'react'
import { SpecialEventKey, eventInput } from './EventKey';
interface SpecialEvent {
    [eventName: string]: string[];
}

const CreateEventComp = () => {
    const [inputs, setinputs] = useState<any>();



    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        // setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(value)
        SpecialEventKey.forEach((elem: SpecialEvent) => {

            if (elem[value]) {
                setinputs(elem[value])
            }
        })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Send formData to your API endpoint

    };


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg my-5">
                <h1 className="text-2xl font-semibold mb-4">Create Event</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Event Type</label>
                        <select
                            name="eventType"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            // value={formData.eventType}
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
                    <SpecialEvent inputs={inputs} />
                    <AllEventKeys />

                    {/* Add other input fields here */}
                    <button
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    );
};


export default CreateEventComp

const SpecialEvent = ({ inputs }: { inputs: string[] }) => {
    return (
        <div>
            {
                inputs?.map((elem: string) => (
                    // console.log(elem, 'element')
                    < div className="mb-4" key={elem}>
                        <label className="block text-gray-700 font-semibold mb-1 capitalize">{elem}</label>
                        <input type="text" name={elem} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" />
                    </div>
                ))
            }
        </div>
    )
}

const AllEventKeys = () => {

    return (
        <div>
            {eventInput.map((event) => (
                < div className="mb-4" key={event.name}>
                    <label className="block text-gray-700 font-semibold mb-1 capitalize">{event.title}</label>
                    <input type="text" name={event.name} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" />
                </div>
            ))}

        </div>
    )
}