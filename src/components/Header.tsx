import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { Option } from "./HeaderOption";
import Link from "next/link";
import NavBarUlList from "./NavBarUlList";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <li>
        <NavBarUlList />
        {/* @ts-ignore */}
        <User />
        {/* <Option /> */}
      </li>
    </nav>
  );
};

export default Header;

const User = async () => {
  const session: any = await getServerSession(handler);
  return (
    <div>
      {session ? (
        <Link href="dashboard">
          <span className="text-white hover:text-blue-300 ">
            {session?.user.name || session?.user?.email}
          </span>
        </Link>
      ) : (
        <Option />
      )}
    </div>
  );
};
