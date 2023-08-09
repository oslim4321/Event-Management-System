"use client"
import React, { ChangeEvent, useState } from 'react'
import { SpecialEventKey, eventInput } from './EventKey';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface SpecialEvent {
    [eventName: string]: string[];
}

const CreateEventComp = () => {
    const [inputs, setinputs] = useState<any>();
    const [data, setdata] = useState<any>()
    const router = useRouter()



    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setdata((prev: typeof data) => ({ ...prev, ['eventType']: value }))

        console.log(value)
        SpecialEventKey.forEach((elem: SpecialEvent) => {

            if (elem[value]) {
                setinputs(elem[value])
            }
        })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data)
        // Send formData to your API endpoint
        try {
            const res: any = await axios.post('/api/event/createEvent/', data)
            console.log(res)
            if (res.data?.message) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.name, ':', e.target.value)
        const name = e.target.name
        const val = e.target.value
        setdata((prev: typeof data) => ({ ...prev, [name]: val }))
    }


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
                    <SpecialEvent inputs={inputs} handleInputChange={handleInputChange} />
                    <AllEventKeys handleInputChange={handleInputChange} />

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

const SpecialEvent = ({ inputs, handleInputChange }: { inputs: string[], handleInputChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return (
        <div>
            {
                inputs?.map((elem: string) => (
                    // console.log(elem, 'element')
                    < div className="mb-4" key={elem}>
                        <label className="block text-gray-700 font-semibold mb-1 capitalize">{elem}</label>
                        <input type="text" name={elem} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                ))
            }
        </div>
    )
}

const AllEventKeys = ({ handleInputChange }: { handleInputChange: React.ChangeEventHandler }) => {

    return (
        <div>
            {eventInput.map((event) => (
                < div className="mb-4" key={event.name}>
                    <label className="block text-gray-700 font-semibold mb-1 capitalize">{event.title}</label>
                    <input type="text" name={event.name} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                </div>
            ))}

        </div>
    )
}