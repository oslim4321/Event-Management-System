"use client";
import React, { useEffect, useState } from "react";
import { SpecialEventKey, eventInput } from "./EventKey";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { format } from "date-fns";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingButton from "@/components/LoadingButton";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/utility/firebase";
import { tr } from "date-fns/locale";

interface SpecialEventType {
  [eventName: string]: string[];
}
interface FormData {
  [key: string]: string;
}
type ImageState = File | undefined;

const EventForm = () => {
  const { data }: any = useSession();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>();
  const [disableButton, setdisableButton] = useState(true);
  const [imageData, setimageData] = useState<ImageState>();
  const [selectedDateTime, setSelectedDateTime] = useState<Date | undefined>(
    undefined
  );
  const [inputs, setinputs] = useState<any>();
  const [loading, setloading] = useState(false);
  const router = useRouter();

  // get the input image
  const handleImageChange = (e: any) => {
    setimageData(e.target.files?.[0]);
    // const selectedImages = Array.from(e.target.files);
    // setImages(selectedImages);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
      eventDate: selectedDateTime,
      organizer: data?.newUser?._id,
    }));

    SpecialEventKey?.forEach((elem: any) => {
      if (elem[value]) {
        setinputs(elem[value]);
      }
      // else {
      //     setinputs('')
      // }
    });
  };

  const handleNext = () => {
    setinputs("");
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const uploadmageToFireStorage = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 2000);
      const storageRef = ref(
        storage,
        `images/${imageData?.name}${randomNumber}`
      );

      if (imageData) {
        await uploadBytes(storageRef, imageData);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      } else {
        return null; // Return null if imageData is undefined
      }
    } catch (error) {
      console.log("image upload error", error);
      return error;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    // console.log(image, image?.name);

    try {
      const downloadURL = await uploadmageToFireStorage();

      const formVal = { ...formData, image: downloadURL };
      const res: any = await axios.post("/api/event/createEvent/", formVal);
      console.log(res);
      if (res.data?.message) {
        setloading(false);
        router.push("/");
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }

    // post data
    // try {
    //   const res: any = await axios.post("/api/event/createEvent/", formData);
    //   console.log(res);
    //   if (res.data?.message) {
    //     router.push("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   (false);
    // }
  };

  const currentInput = eventInput[currentStep];
  // console.log(currentInput)
  const handleDateTimeChange = (date: any) => {
    setSelectedDateTime(date);
  };
  // console.log(formData);
  // console.log(currentInput, "currentInput");
  useEffect(() => {
    if (formData) {
      setdisableButton(false);
    } else {
      setdisableButton(true);
    }
  }, [formData]);

  return (
    <div className="max-w-md mx-auto p-4">
      {/* <h2 className="text-xl font-semibold mb-4">{currentInput.title}</h2> */}
      <div>
        <div
          className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute glass inset-0 z-0"></div>
          <div className="w-full h-[50%] flex jusdtify-center items-center max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white shadowCss">
            <div className="w-full py-10">
              <h1 className="text-black text-2xl title-font font-bold mb-2">
                {currentInput.title}
              </h1>
              {/* {selectedDateTime && format(new Date(selectedDateTime), 'MMMM d, yyyy HH:mm a')} hdllo */}
              {currentInput.type === "textarea" ? (
                <textarea
                  key={`input-${currentStep}`}
                  name={currentInput.name}
                  value={formData[currentInput.name] || ""}
                  onChange={handleInputChange}
                  // required
                  className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in"
                  cols={parseInt("30")}
                  rows={parseInt("5")}
                />
              ) : currentInput.type === "date" ? (
                //   @ts-ignore
                <Datetime
                  value={selectedDateTime}
                  className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`}
                  dateFormat="DD-MM-YYYY"
                  onChange={handleDateTimeChange}
                />
              ) : currentInput.type === "category" ? (
                <select
                  className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`}
                  name="eventType"
                  // required
                  onChange={handleInputChange}
                >
                  <option value="*">Select</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Musical">Musical</option>
                  <option value="Burial">Burial</option>
                  <option value="Other">Other</option>
                </select>
              ) : currentInput.type === "image" ? (
                <input
                  onChange={handleImageChange}
                  type="file"
                  className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in"
                />
              ) : (
                <input
                  key={`input-${currentStep}`}
                  type={currentInput.type}
                  name={currentInput.name}
                  // required
                  value={formData[currentInput.name] || ""}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 slide-in shadow`}
                />
              )}
              {inputs && (
                <SpecialEvent
                  inputs={inputs}
                  handleInputChange={handleInputChange}
                />
              )}
              <div className="flex justify-between mt-4">
                {currentStep > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="bg-gray-300 px-3 py-1 rounded"
                  >
                    Previous
                  </button>
                )}
                {currentStep < eventInput.length - 1 && (
                  <button
                    disabled={disableButton}
                    onClick={handleNext}
                    className={`bg-blue-500 text-white px-3 py-1 rounded ${
                      disableButton ? "bg-gray-500" : ""
                    }`}
                  >
                    Next
                  </button>
                )}
                {currentStep === eventInput.length - 1 &&
                  (loading ? (
                    <LoadingButton loading={loading} />
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Submit
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;

const SpecialEvent = ({
  inputs,
  handleInputChange,
}: {
  inputs: string[];
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      {inputs?.map((elem: string) => (
        // console.log(elem, 'element')
        <div className="mb-4" key={elem}>
          <label className="block text-gray-700 font-semibold mb-1 capitalize">
            {elem}
          </label>
          <input
            type={elem === "ticketPrice" ? "number" : "text"}
            // required
            name={elem}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            onChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  );
};
