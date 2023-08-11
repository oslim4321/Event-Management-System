"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutButton = () => {
    function handleSignOutClick() {
        signOut()
    }
    return (
        <div> <button onClick={handleSignOutClick} className=' border px-3 py-2'>Logout</button></div>
    )
}

export default LogoutButton