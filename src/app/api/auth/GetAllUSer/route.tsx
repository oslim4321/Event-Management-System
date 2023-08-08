import User from "@/model/User";
import { NextResponse } from "next/server";


export const GET = async (request: Request) => {
    const user = await User.find()
    return NextResponse.json({ user })
};