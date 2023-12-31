import Link from "next/link";
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { Option } from "./HeaderOption";
import NavList from "./NavList";

const Header = () => {
  return (
    <div>
      <nav className="bg-transparent bg-opacity-25 p-4x abdsolute w-full">
        <div className="flex max-w-[80%] py-5 mx-auto z-30">
          <Link href="/">
            <span className="text-whitee font-semibold text-l sm:text-xl  md:mb-0 md:mr-4">
              EventManager
            </span>
          </Link>
          <NavList />
          {/* @ts-ignore */}
          <User />
        </div>
      </nav>
    </div>
  );
};

export default Header;

const User = async () => {
  const session: any = await getServerSession(handler);
  return (
    <div>
      {session ? (
        <Link href="/dashboard">
          <span className="text-whitee hover:text-blue-300 ">
            {" "}
            {session?.user.name || session?.user?.email}
          </span>
        </Link>
      ) : (
        <Option />
      )}
    </div>
  );
};
