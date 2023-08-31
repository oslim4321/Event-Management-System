"use client"
import React, { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { EventTypeModel } from '@/utils/typescriptModel'
import { format } from 'date-fns'
import Link from 'next/link'

const ListMyEvent = () => {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([]);
    const session = useSession()
    if (!session) {
        alert('no session')
    } else {
        console.log(session);

    }
    async function handleFetchData() {
        setloading(true)
        try {                                                 //@ts-ignore
            const res = await axios.get('/api/dashboard/' + session?.data?.newUser?._id)
            console.log(res)
            setdata(res.data.message)
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }
    console.log(data)
    useEffect(() => {
        handleFetchData()
    }, [session])

    return (
        <>
            {/* <button onClick={handleFetchData}>See my Events</button> */}
            <Spinner loading={loading} />
            {!loading && data.length > 1 ? <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-200 border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Event Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Location
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Category
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Date
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                {data.map((elem: EventTypeModel, i) => (
                                    < tbody >
                                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {elem?.eventName}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {elem.eventLocation}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {elem?.eventType}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {format(new Date(elem?.eventDate), 'MMMM d, yyyy HH:mm a')}
                                            </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border cursor-pointer">
                                            <Link href={`events/editEvent/${elem._id}`}>
                                                    edit
                                            </Link>
                                                </td>
                                        </tr>

                                    </tbody>
                                ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div> :
                <p>Cant Get Any Event</p>
            }
        </>
    )
}

export default ListMyEvent