"use client"
import React, { useState } from 'react'
import Spinner from '@/components/Spinner'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { EventTypeModel } from '@/utils/typescriptModel'

const ListMyEvent = () => {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([]);
    const session = useSession()
    async function handleFetchData() {
        setloading(true)
        try {                                                 //@ts-ignore
            const res = await axios.get('/api/event/' + session?.data?.newUser?._id)
            console.log(res)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }
    console.log(data)

    return (
        <>
            <button onClick={handleFetchData}>See my Events</button>
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
                                                {elem?.eventDate}
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