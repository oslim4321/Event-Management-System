"use client"
import { ImgComp } from '@/components/ImageComp';
import Spinner from '@/components/Spinner';
import { EventTypeModel } from '@/utils/typescriptModel';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const RelatedEvents = ({ category }: { category: string | null }) => {
    const [data, setdata] = useState<any>()
    const [loading, setloading] = useState(false)
    async function getEventOnCat() {
        setloading(true)
        try {
            const res = await axios.post('/api/event/EventCategory', { category })
            console.log(res)
            setdata(res.data.results)
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        getEventOnCat()
    }, [])

    console.log(data)
    return (
        <div>
            {
                loading ? <Spinner loading={loading} /> : data ?

                    <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                        <div className="grifd grid-cols-12 col-span-12 flex justify-center items-center flex-wrap gap-7">
                            {
                                data?.length > 0 ? data?.map((elem: EventTypeModel, i: number) => (

                                    <div key={i} className="fledx flex-col items-start w-full overflow-hidden shadow-sm rounded-xl md:w-[300px]">
                                        <Link href={'/events/' + elem._id} className="block transition duration-200 ease-out transform hover:scale-110">
                                            {/* <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" /> */}
                                            <ImgComp src={elem?.image} alt={elem.eventName} className="object-cover w-full shadow-sm h-[300px]" />
                                        </Link>
                                        <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                            <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                                <span>Flask</span>
                                            </div>
                                            <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">{elem.eventName}</a></h2>
                                            {elem?.eventDesc && <p className="mt-2 text-sm text-gray-500">{elem?.eventDesc.slice(0, 100) || ''}</p>}
                                        </div>
                                    </div>
                                ))
                                    :
                                    ''
                            }



                            {/* <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                                <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                    <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" />
                                </a>
                                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                                    <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                                        <span>Flask</span>
                                    </div>
                                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">Creating user registration and authentication system in flask</a></h2>
                                    <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using flask and mysql db.</p>
                                </div>
                            </div> */}
                        </div>

                    </div>
                    :
                    ''
            }
        </div>
    )
}

export default RelatedEvents