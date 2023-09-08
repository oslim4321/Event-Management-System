"use client";
import { useTypedSelector } from "@/GlobalRedux/store";
import { ImgComp } from "@/components/ImageComp";
import { format } from "date-fns";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import LoadingButton from "@/components/LoadingButton";
import { useRouter } from "next/navigation";

const RegisterEventModal = ({
  seteventRegiId,
}: {
  seteventRegiId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { data: event } = useTypedSelector((state) => state.singleEvent);
  const navigate = useRouter();
  // console.log(event, "mee");
  const session = useSession();
  const [loading, setloading] = useState(false);
  const [eventRegisterSuccess, seteventRegisterSuccess] = useState(false);

  async function registerEvent() {
    setloading(true);
    const id = event._id;
    // @ts-ignore
    const user = session?.data?.newUser._id;
    console.log(session, "the user onlimne");

    try {
      const { data } = await axios.post("/api/event/registeredEvents", {
        eventId: id,
        userId: user,
      });
      if (data.message === "Unauthorized") {
        alert("UNKNOWN");
      }
      seteventRegiId("");
      // navigate.refresh();
      // navigate.push("dashboard");

      console.log(data);
    } catch (error: any) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div className="">
            {event.entryFe ? (
              <div className="absolute right-5 ">
                <span>paid</span>
                <span className="p-4 py-2 border">{event.entryFee}</span>
              </div>
            ) : (
              ""
            )}
            <div className="flex justify-center items-center flex-col gap-y-4">
              <h1 className="text-3xl mt-10"> {event.eventName}</h1>
              <ImgComp
                src={event.image}
                alt={event.eventName + event.eventDesc}
                className="w-[500px] h-[300px] object-cover"
              />
              <p>{format(new Date(event.eventDate), "MMM d, yyyy")}</p>
              <p>{format(new Date(event.eventDate), "HH:mm a")}</p>

              {!session ? (
                <p>Please login to Create Event</p>
              ) : (
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                  {loading ? (
                    <LoadingButton loading={loading} />
                  ) : (
                    <button
                      onClick={registerEvent}
                      className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                    >
                      Register
                    </button>
                  )}
                </div>
              )}
              <button
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                onClick={() => seteventRegiId("")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEventModal;
