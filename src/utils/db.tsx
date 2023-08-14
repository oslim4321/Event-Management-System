import mongoose from "mongoose";

const connect = async () => {
    const configValue: string = process.env.MONGODB_URI || '';
    try {
        await mongoose.connect(configValue);
        console.log('connected')
    } catch (error) {
        throw Error("connection failed");
    }
};
export default connect;
