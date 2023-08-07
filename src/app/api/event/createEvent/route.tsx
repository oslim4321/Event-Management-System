import connect from "@/utils/db"
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";



export const POST = async (request: Request) => {
    await connect()
    const session = useSession()
    return NextResponse.json({ session })

}