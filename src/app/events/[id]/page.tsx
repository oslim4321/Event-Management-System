// import axios from 'axios';
// import React from 'react'
// import FullEvent from './FullEvent';
// interface MyObjectType {
//     id: string;
// }

// async function getData(id: string) {
//     try {
//         const event: any = await axios.get(process.env.BASE_URL + '/api/event/' + id)
//         if (!event?.ok) {
//             console.log('error ')
//         }
//         return event.data.message

//     } catch (error) {
//         throw new Error("failed to fetch data");

//         // return error
//         // throw Error('failed fetch data on')
//     }
// }

// export async function generateMetadata({ params }: { params: MyObjectType }) {
//     const data = await getData(params.id)

//     return {
//         title: data?.eventName || 'Event Manager',
//         description: data?.specialInstructions,
//     };
// }

// const page = async ({ params }: { params: MyObjectType }) => {
//     const data = await getData(params.id)
//     return (
//         <div>page
//             {
//                 data._id ?
//                     <FullEvent data={data} />
//                     :
//                     'Error'

//             }
//         </div>
//     )
// }

// export default page

import React from 'react'

const page = () => {
    return (
        <div>page</div>
    )
}

export default page