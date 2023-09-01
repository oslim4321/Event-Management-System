"use client"
import React, { useState } from 'react';
import { SpecialEventKey, eventInput } from './EventKey';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { format } from 'date-fns'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


interface SpecialEventType {
    [eventName: string]: string[];
}
interface FormData {
    [key: string]: string;
}

const EventForm = () => {
    const {data} : any = useSession()
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<any>();
    const [selectedDateTime, setSelectedDateTime] = useState<Date | undefined>(undefined);
    const [inputs, setinputs] = useState<any>();
    const router = useRouter()


    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({ ...prevData, [name]: value, eventDate: selectedDateTime, organizer: data?.newUser?._id }));

        SpecialEventKey?.forEach((elem: any) => {

            if (elem[value]) {
                setinputs(elem[value])
            }
            // else {
            //     setinputs('')
            // }
        })

    };

    const handleNext = () => {
        setinputs('')
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
       
        
        // post data
        try {
            const res: any = await axios.post('/api/event/createEvent/', formData)
            console.log(res)
            if (res.data?.message) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    };

    const currentInput = eventInput[currentStep];
    // console.log(currentInput)
    const handleDateTimeChange = (date: any) => {
        setSelectedDateTime(date);

    };
    return (
        <div className="max-w-md mx-auto p-4">
            {/* <h2 className="text-xl font-semibold mb-4">{currentInput.title}</h2> */}
            <div>
                <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                    <div className="absolute glass inset-0 z-0"></div>
                    <div className="w-full h-[50%] flex jusdtify-center items-center max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white shadowCss">
                        <div className='w-full py-10'>
                            <h1 className="text-black text-2xl title-font font-bold mb-2">{currentInput.title}</h1>
                            {/* {selectedDateTime && format(new Date(selectedDateTime), 'MMMM d, yyyy HH:mm a')} hdllo */}
                            {
                                currentInput.type === 'textarea' ? (
                                    <textarea
                                        key={`input-${currentStep}`}
                                        name={currentInput.name}
                                        value={formData[currentInput.name] || ''}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in"
                                        cols={parseInt("30")}
                                        rows={parseInt("5")} />
                                )
                                    :
                                    currentInput.type === 'date' ?
                                        //   @ts-ignore 
                                        < Datetime value={selectedDateTime}
                                            className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`}
                                            dateFormat="DD-MM-YYYY" onChange={handleDateTimeChange} />
                                        :
                                        currentInput.type === 'category'
                                            ?
                                            <select className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`} name='eventType' onChange={handleInputChange}>
                                                <option value="*">Select</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Musical">Musical</option>
                                                <option value="Burial">Burial</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            :
                                            (<input
                                                key={`input-${currentStep}`}
                                                type={currentInput.type}
                                                name={currentInput.name}
                                                value={formData[currentInput.name] || ''}
                                                onChange={handleInputChange}
                                                className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`} />
                                            )


                            }
                            {inputs && <SpecialEvent inputs={inputs} handleInputChange={handleInputChange} />}
                            <div className="flex justify-between mt-4">
                                {currentStep > 0 && (
                                    <button onClick={handlePrevious} className="bg-gray-300 px-3 py-1 rounded">
                                        Previous
                                    </button>
                                )}
                                {currentStep < eventInput.length - 1 && (
                                    <button onClick={handleNext} className="bg-blue-500 text-white px-3 py-1 rounded">
                                        Next
                                    </button>
                                )}
                                {currentStep === eventInput.length - 1 && (
                                    <button onClick={handleSubmit} className="bg-green-500 text-white px-3 py-1 rounded">
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default EventForm;


const SpecialEvent = ({ inputs, handleInputChange }: { inputs: string[], handleInputChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return (
        <div>
            {
                inputs?.map((elem: string) => (
                    // console.log(elem, 'element')
                    < div className="mb-4" key={elem}>
                        <label className="block text-gray-700 font-semibold mb-1 capitalize">{elem}</label>
                        <input type={elem === 'ticketPrice' ? 'number' : "text"} name={elem} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                ))
            }
        </div>
    )
}