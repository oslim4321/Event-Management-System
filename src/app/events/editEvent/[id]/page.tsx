import React from 'react'
import UpdateEvent from './UpdateEvent'
import { getSingleEvent } from '../../[id]/page';
import { EventTypeModel } from '@/utils/typescriptModel';
type MyParams = {
    id: string;
  };
  
  
const page = async({params}:{params: MyParams}) => {
    const {message} : {message: EventTypeModel} = await getSingleEvent(params.id)
    // console.log(message);
    
    return (
        <div>
            <UpdateEvent EventData={message} />
        </div>
    )
}

export default page