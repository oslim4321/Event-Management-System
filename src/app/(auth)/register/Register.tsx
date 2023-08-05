import SignUpWithGoggleCompo from '@/components/SignUpWithGoggleCompo'
import React from 'react'

const Register = () => {
  return (
    <div><main className="relative min-h-screen w-full bg-white">
      <div className="p-6">
        {/* <!-- header --> */}
        <header className="flex w-full justify-between">

        </header>

        <div className="absolute left-1/2 top-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          {/* <!-- register content --> */}
          <div className="space-y-4">
            <header className="mb-3 text-2xl font-bold">Create your Account</header>

            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="text" placeholder="First Name" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
            </div>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="text" placeholder="Last Name" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
            </div>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="text" placeholder="Email" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
            </div>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input type="password" placeholder="Password" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
            </div>
            <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">CREATE ACCOUNT</button>
          </div>


          <SignUpWithGoggleCompo />
        </div>
      </div>
    </main>
    </div>
  )
}

export default Register