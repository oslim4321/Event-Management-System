import SignUpWithGoggleCompo from '@/components/SignUpWithGoggleCompo'
import React from 'react'

const Login = () => {
  return (
    <div>


      {/* <!-- login content --> */}
      <div className="absolute left-1/2 top-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">

        <div className="space-y-4">
          <header className="mb-3 text-2xl font-bold">Log in</header>
          <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
            <input type="text" placeholder="Email or username" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
          </div>
          <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
            <input type="password" placeholder="Password" className="my-3 w-full border-none bg-transparent outline-none" />
            <a href="#" className="font-medium text-gray-400 hover:text-gray-500">FORGOT?</a>
          </div>
          <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">LOG IN</button>
        </div>
        <SignUpWithGoggleCompo />
      </div>
    </div>
  )
}

export default Login