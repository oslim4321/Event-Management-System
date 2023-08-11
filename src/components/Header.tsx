

import Link from "next/link";
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { Option } from "./HeaderOption";

const Header = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link href="/">
                    <span className="text-white font-semibold text-xl mb-2 md:mb-0 md:mr-4">
                        EventManager
                    </span>
                </Link>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li>
                        <Link href="/">
                            <span className="text-white hover:text-blue-300">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <span className="text-white hover:text-blue-300">Events</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="text-white hover:text-blue-300">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="text-white hover:text-blue-300">Contact</span>
                        </Link>
                    </li>
                    <li>
                        {/*  @ts-ignore */}
                        <User />
                        {/* <Option /> */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;

const User = async () => {
    const session: any = await getServerSession(handler)
    return (
        <div>
            {
                session ?
                    <Link href='dashboard'><span className="text-white hover:text-blue-300"> {session?.user.name || session?.user?.email}</span></Link>
                    :
                    <Option />
            }
        </div>
    )

}