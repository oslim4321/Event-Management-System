import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import EventList from './EventList';
import { getServerSession } from 'next-auth';
import { handler } from '../api/auth/[...nextauth]/route';


type UserSch = {
    name: string;
    email: string;
    image: string;
};

const getData = async () => {
    try {
        const res: any = await axios.get(process.env.BASE_URL + '/api/event')
        if (!res?.ok) {
            console.log('error ')
        }
        return res?.data
    } catch (error) {
        console.log(error, 'error')
        throw Error('failed fetch data on')

    }
}
export const metadata = {
    title: "Event Lising",
    description: "Stay up-to-date with the latest upcoming events and never miss out on exciting experiences. Explore a curated selection of upcoming events that cater to your interests and preferences. Don't let outdated information hold you back – discover the most relevant and engaging events waiting for you.",
};
const page = async () => {

    const { data } = await getData()

    const session: any = await getServerSession(handler)

    // if (!session) {
    //     // return <div className='text-center text-4xl'>Please login</div>
    //     redirect('/login?callbackURL=/protected/server')
    // }
    return (

        <div>
            <div className="max-w-[80%] mx-auto">
                {/* {session?.user?.name}
                {session?.user?.email}
                Event Page must be protected */}

                {session ?<div className='flex justify-end'>
                    <Link href='/events/uploadEvent'><button className='py-2 px-3 border'>Create Your Event</button></Link>
                </div> : ''}
                {/* <EventCard eventData={data} /> */}
                {/* My events */}
                <EventList eventData={data} />

            </div>

        </div>

    )
}

export default page


