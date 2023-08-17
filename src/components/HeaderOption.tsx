"use client"
import React, { useState } from 'react'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


export const Option = () => {
    // interface Session {
    //     // other properties...
    //     newUser?: UserTypeModel
    // }

    const session = useSession();
    console.log(session)
    const { data, status }: any = useSession();
    // const latestUser = data?.newUser;
    const [popUp, setpopUp] = useState(false);

    function handleClick() {
        setpopUp(() => !popUp)
    }
    // logoit

    const signOutClick = () => {
        signOut()
    };
    return (
        <div className="relative inline-block text-left">
            <div onClick={handleClick}>
                <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">

                    {
                        status === 'authenticated' ?
                            <p>Hello {data?.newUser?.firstName}</p>
                            :
                            // status === 'loading' ? 'wait...' :
                            <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Login
                            </button>
                    }
                </div>
                {/* <ShowUserStateAuth /> */}
            </div>


            {popUp &&
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <div className="py-1" role="none">
                        {/* {status === 'unauthenticated' ? () */}
                        {
                            status === 'authenticated' ?
                                <div>

                                    <button onClick={signOutClick} className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" >Sign out</button>
                                </div>

                                :
                                <ul>
                                    <li>
                                        <Link href={'/login'} className="text-gray-700 block px-4 py-2 text-sm">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/register'} className="text-gray-700 block px-4 py-2 text-sm">
                                            Signup
                                        </Link>
                                    </li>
                                </ul>
                        }


                    </div>
                </div>
            }
        </div>

    )
}
