
import axios from 'axios';

export const fetchSingleEvent = async(id: string)=>{
    try {
        const event: any = await axios.get(process.env.BASE_URL + '/api/event/' + id)
        if (!event?.ok) {
            console.log('error ')
        }
        return event.data

    } catch (error) {
        console.log(error);
        
        // throw new Error("failed to fetch data");

        return error
        // throw Error('failed fetch data on')
    }
}