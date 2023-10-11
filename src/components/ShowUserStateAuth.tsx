import { handler } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

const ShowUserStateAuth = async () => {
  const { user }: any = await getServerSession(handler);
  //
  // if (!session) {
  //     // return <div className='text-center text-4xl'>Please login</div>
  //     redirect('/login?callbackURL=/protected/server')
  // }
  return (
    <div>
      {" "}
      <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {user?.email}
        {/* {
        status === 'authenticated' ?
          <p>Hello {data?.newUser?.firstName}</p>
          :
          status === 'loading' ? 'wait...' :
            <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Login
            </button>
      } */}
      </div>
    </div>
  );
};

export default ShowUserStateAuth;
