"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
const page = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callbackRRL=/protected/client')
    },
  })

}

export default page