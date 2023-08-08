import User from "@/model/User";
import connect from "@/utils/db"
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { isAuthenticated } from "../../middleware/varifyUser";


export const POST = async (request: Request) => {
    isAuthenticated()
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ message: 'not authenticated' });
    }
    return NextResponse.json({ session });
};