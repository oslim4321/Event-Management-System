import User from "@/model/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// 
export const POST = async (request: Request) => {
    const { name, email, password } = await request.json();
    await connect()
    // const hashedPass = await bcrypt.hash(password, 10);
    try {
        const newUser = await User.create({ name, email, password });
        console.log("created");

        return NextResponse.json({ message: 'User created success' }, { status: 200 })

    } catch (error) {

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

    }
};