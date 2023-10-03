import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import axios from "axios";
import EventList from "./EventList";
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import Skeleton from "./Skeleton";
import Search from "./Search";
import FilterPage from "./FilterPage";

type UserSch = {
  name: string;
  email: string;
  image: string;
};

const getData = async (
  email: string,
  page: Number,
  search: string,
  category: string
) => {
  try {
    const res: any = await axios.post(
      process.env.BASE_URL +
        `/api/event?page=${page}&search=${search}&category=${category}`,
      {
        email,
      }
    );
    if (!res?.ok) {
      console.log("error ");
    }
    return res?.data;
  } catch (error) {
    console.log(error, "error");
    return notFound();
    // throw Error("failed fetch data on");
  }
};
export const metadata = {
  title: "Event Lising",
  description:
    "Stay up-to-date with the latest upcoming events and never miss out on exciting experiences. Explore a curated selection of upcoming events that cater to your interests and preferences. Don't let outdated information hold you back – discover the most relevant and engaging events waiting for you.",
};
const page = async ({ searchParams }: any) => {
  // query
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const category =
    typeof searchParams.category === "string" ? searchParams.category : "";

  const session: any = await getServerSession(handler);
  // if
  const data = await getData(session?.user?.email, page, search, category);

  return (
    <div>
      <div className="max-w-[80%] mx-auto">
        <div className="flex gap-x-2">
          {/* <FilterPage /> */}

          <div className="flex-1">
            <Search search={search} cat={category} />
          </div>
          {/* {session?.user?.name}
                {session?.user?.email}
                Event Page must be protected */}

          {session?.user ? (
            <div className="flex justify-end">
              <Link href="/events/uploadEvent">
                <button className="py-2 px-3 border">Create Your Event</button>
              </Link>
            </div>
          ) : (
            ""
          )}

          {/* link */}
          <Link
            href={{
              pathname: "/events",
              query: {
                page: page > 1 ? page - 1 : 1,
              },
            }}
            className={`rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800 ${
              page <= 1 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Previous
          </Link>
          {/* next */}
          <Link
            href={{
              pathname: "/events",
              query: {
                page: page + 1,
              },
            }}
            className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800"
          >
            Next
          </Link>
        </div>

        {data && (
          <Suspense fallback={<Skeleton />}>
            <EventList
              eventData={data?.data?.events}
              registerEvent={data?.data?.registerEvent}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default page;
