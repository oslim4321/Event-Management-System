import { useTypedSelector } from '@/GlobalRedux/store'
import React from 'react'

const RegisterEventClick = () => {
    const event = useTypedSelector((state)=> state)
  return (
    <div>
        <button className='text-xm'>Register</button>
    </div>
  )
}

export default RegisterEventClick