import axios from 'axios';
import React from 'react'
import FullEvent from './FullEvent';
interface MyObjectType {
    id: string;
}

async function getData(id: string) {
    try {
        const event: any = await axios.get(process.env.BASE_URL + '/api/event/' + id)
        if (!event?.ok) {
            console.log('error ')
        }
        return event.data

    } catch (error) {
        throw Error("failed to fetch data");

        // return error
        // throw Error('failed fetch data on')
    }
}

export async function generateMetadata({ params }: { params: MyObjectType }) {
    const data = await getData(params.id)

    return {
        title: data?.eventName || 'Event Manager',
        description: data?.specialInstructions,
    };
}

const page = async ({ params }: { params: MyObjectType }) => {
    const { message: data, comment } = await getData(params.id)
    return (
        <div>
            {
                data._id ?
                    <FullEvent data={data} comment={comment} />
                    :
                    'Error'

            }
        </div>
    )
}

export default page
