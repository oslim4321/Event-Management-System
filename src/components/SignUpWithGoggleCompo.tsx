"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { useSession } from "next-auth/react";

const SignUpWithGoggleCompo = () => {
  const session = useSession();
  return (
    <div>
      <div className="flex items-center space-x-4">
        <hr className="w-full border border-gray-300" />
        <div className="font-semibold text-gray-400">OR</div>
        <hr className="w-full border border-gray-300" />
      </div>
      <footer>
        {/* <div className="grid grid-cols-2 gap-4">
          <a href="#" className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">FACEBOOK</a>
          <div onClick={() => signIn("google")} className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">GOOGLE</div>
        </div> */}

        <div className="mt-8 text-sm text-gray-400">
          By signing in to ********, you agree to our
          <a href="#" className="font-medium text-gray-500">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-gray-500">
            Privacy Policy
          </a>
          .
        </div>
      </footer>
    </div>
  );
};

export default SignUpWithGoggleCompo;
