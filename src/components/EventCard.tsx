import { EventTypeModel } from '@/utils/typescriptModel'
import React from 'react'
import { ImgComp } from './ImageComp'

const EventCard = ({ eventData }: { eventData: EventTypeModel[] }) => {
    return (
        <div>
            <div>
                <div className=" py-20 bg-gray-100 flex justify-center flex-wrap  gap-10">
                    {
                        eventData?.map((elem): any => {
                            return (
                                <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer w-[300px]">
                                    <div className='w-full h-[50%]'>
                                        {/* <img src={elem.image} alt="" /> */}
                                        <ImgComp src={elem.image} alt={elem.eventName} className='w-full h-full' width='' />
                                    </div>
                                    <div className="py-4 px-4 bg-white">
                                        <h3 className="text-lg font-semibold text-gray-600">{elem.eventName}</h3>
                                        <p className="mt-4 text-lg font-thin">$ 2400</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="max-w-xs rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 cursor-pointer">
                        <div>
                            <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
                        </div>
                        <div className="py-4 px-4 bg-white">
                            <h3 className="text-lg font-semibold text-gray-600">Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)</h3>
                            <p className="mt-4 text-lg font-thin">$ 2400</p>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 cursor-pointer">
                        <div>
                            <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
                        </div>
                        <div className="py-4 px-4 bg-white">
                            <h3 className="text-lg font-semibold text-gray-600">Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)</h3>
                            <p className="mt-4 text-lg font-thin">$ 2400</p>
                        </div>
                    </div> */}
                    {/* <div className="max-w-xs rounded-md overflow-hidden shadow-md hover:scale-105 transition duration-500 cursor-pointer">
                        <div>
                            <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
                        </div>
                        <div className="py-4 px-4 bg-white">
                            <h3 className="text-lg font-semibold text-gray-600">Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)</h3>
                            <p className="mt-4 text-lg font-thin">$ 2400</p>
                        </div>
                    </div> */}
                </div>
            </div></div>
    )
}

export default EventCard