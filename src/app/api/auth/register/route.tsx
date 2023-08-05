import User from "@/model/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// 
export const POST = async (request: Request) => {
    const { firstName, lastName, email, password } = await request.json();
    await connect()
    // const hashedPass = await bcrypt.hash(password, 10);
    try {
        const newUser = await User.create({ firstName, lastName, password, email });
        console.log("created", newUser);

        return NextResponse.json({ message: 'User created success' }, { status: 200 })

    } catch (error) {
        console.log(error)

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

    }
};