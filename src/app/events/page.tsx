import { getServerSession } from 'next-auth'
import React from 'react'
import { handler } from '../api/auth/[...nextauth]/route'
import Link from 'next/link';
import { redirect } from 'next/navigation';


type UserSch = {
    name: string;
    email: string;
    image: string;
};
const page = async () => {
    const session: any = await getServerSession(handler)
    if (!session) {
        // return <div className='text-center text-4xl'>Please login</div>
        redirect('/login?callbackURL=/protected/server')
    }
    return (

        <div>
            <div className="max-w-[80%] mx-auto">
                {session?.user?.name}
                {session?.user?.email}
                Event Page must be protected

                <div className='flex justify-end'>
                    <Link href='createevent'><button className=''>Create Your Event</button></Link>
                </div>
            </div>

        </div>

    )
}

export default page