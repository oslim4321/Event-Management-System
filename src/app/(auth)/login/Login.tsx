"use client";
import SignUpWithGoggleCompo from "@/components/SignUpWithGoggleCompo";
import React, { ChangeEvent, useState } from "react";
import { DataState } from "../register/Register";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/LoadingButton";

const Login = () => {
  const { status } = useSession();
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const [data, setdata] = useState<DataState>({});
  function handleChange(e: ChangeEvent<HTMLElement>) {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const val = target.value;

    setdata((prevData) => ({ ...prevData, [name]: val }));
  }

  function handleClick() {
    setloading(true);
    console.log(data);
    const { email, password } = data as { email: string; password: string };
    try {
      signIn("credentials", { email, password });
    } catch (error) {
      console.log(error, "from error");
      setloading(false);
    } finally {
      // setloading(false)
    }
  }
  if (status === "loading") {
    return "Loading";
  }

  if (status === "unauthenticated")
    return (
      <div>
        {/* <!-- login content --> */}
        <div className="absolute left-1/2 top-1/2 mx-auto md:max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          <div className="space-y-4">
            <header className="mb-3 text-2xl font-bold">Log in</header>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="text"
                placeholder="Email or username"
                name="email"
                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="my-3 w-full border-none bg-transparent outline-none"
                onChange={handleChange}
              />
              <a
                href="#"
                className="font-medium text-gray-400 hover:text-gray-500"
              >
                FORGOT?
              </a>
            </div>
            {loading ? (
              <LoadingButton loading={loading} />
            ) : (
              <button
                className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                onClick={handleClick}
              >
                LOG IN
              </button>
            )}
          </div>
          <SignUpWithGoggleCompo />
        </div>
      </div>
    );
  router.push("/");
};

export default Login;
