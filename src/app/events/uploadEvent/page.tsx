import React from 'react'
import EventForm from './EventForm'
import { getServerSession } from 'next-auth'
import { handler } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const route = async() => {
    const session: any = await getServerSession(handler)
    
    if (!session) {
        redirect('/login?callbackURL=/protected/server')
    }
    // console.log(eventInput)
    
    return (
        <div>
            
            <EventForm />
        </div>
    )
}

export default route