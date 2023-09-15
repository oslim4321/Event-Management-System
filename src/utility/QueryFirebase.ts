import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

const uploadImageToStorage = async (image: any) => {
    console.log(image, "file");
    if (!image || !image || !image.name) {
      console.log("image is null jare");
      return null; // Return null if the image or its name is missing
    }
    const randomNumber = Math.floor(Math.random() * 2000);
    const storageRef = ref(storage, "images/" + image.name + randomNumber);
    const img = await uploadBytes(storageRef, image);
    console.log(img, "uploaded");
    return getDownloadURL(storageRef);
  };