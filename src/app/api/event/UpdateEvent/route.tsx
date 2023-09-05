import Event from "@/model/Event"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const PATCH = async(request: Request)=>{
    try{
        await connect()
        const {data, params} = await request.json()
    
        const updatedData = await Event.findByIdAndUpdate(
            params,
            data,
            { new: true }
        )
        return NextResponse.json({message:updatedData})
    }catch(error){
        return NextResponse.json({error})
    }
}