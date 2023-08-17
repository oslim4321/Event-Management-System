"use client"
import React, { useState } from 'react';
import { eventInput } from './EventKey';

const EventForm = () => {


    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const currentInput = eventInput[currentStep];
    console.log(currentInput)
    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">{currentInput.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                    <div className="absolute glass inset-0 z-0"></div>
                    <div className="w-full h-[50%] flex jusdtify-center items-center max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white shadowCss">
                        <div className='w-full py-10'>
                            <h1 className="text-black text-2xl title-font font-bold mb-2">{currentInput.title}</h1>

                            {
                                currentInput.type === 'textarea' ? (
                                    <textarea
                                        key={`input-${currentStep}`}
                                        name={currentInput.name}
                                        // value={formData[input.name] || ''}
                                        // onChange={handleInputChange}
                                        className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in"
                                        cols={parseInt("30")}
                                        rows={parseInt("5")} />
                                )
                                    :
                                    (<input
                                        key={`input-${currentStep}`}
                                        type={currentInput.type}
                                        name={currentInput.name}
                                        // value={formData[input.name] || ''}
                                        // onChange={handleInputChange}
                                        className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`} />)

                            }
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
                                    <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>



            </form>
        </div>
    );
};

export default EventForm;


// const RenderInput = (input) => {
//     if (input.type === 'textarea') {
//         return (
//             <textarea
//                 name={input.name}
//                 // value={formData[input.name] || ''}
//                 // onChange={handleInputChange}
//                 className="w-full border rounded px-2 py-1 mb-4"
//             />
//         );
//     } else {
//         return (
//             <input
//                 type={input.type}
//                 name={input.name}
//                 // value={formData[input.name] || ''}
//                 // onChange={handleInputChange}
//                 className="w-full border rounded px-2 py-1 mb-4"
//             />
//         );
//     }
// };
// }
{/* <input
    type="text"
    name={currentInput.name}
    // value={formData[currentInput.name] || ''}
    onChange={handleInputChange}
    className="w-full border rounded px-2 py-1 mb-4"
/> */}
