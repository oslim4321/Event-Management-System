import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const POST = async(request: Request)=>{
    const {id} = await request.json()
    // console.log(id);
    try {
        await connect()
        // const event.find()
        return NextResponse.json({message: id})
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({ error})
        
    }
}