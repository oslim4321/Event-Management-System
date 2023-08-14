import { getServerSession } from 'next-auth'
import React from 'react'
import Link from 'next/link';
import EventCard from '@/components/EventCard';
import axios from 'axios';


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
        return res.data
    } catch (error) {
        console.log(error, 'error')
        throw Error('failed fetch data on')

    }
}
const page = async () => {

    const { data } = await getData()


    // const session: any = await getServerSession(handler)

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

                <div className='flex justify-end'>
                    <Link href='/events/createevent'><button className='py-2 px-3 border'>Create Your Event</button></Link>
                </div>
                <EventCard eventData={data} />
                {/* My events */}

            </div>

        </div>

    )
}

export default page


