import mongoose from "mongoose";

const connect = async () => {
  const configValue: string = process.env.MONGODB_URI || "";
  try {
    await mongoose.connect(configValue);
  } catch (error) {
    throw new Error("connection failed");
  }
};
export default connect;
