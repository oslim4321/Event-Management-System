"use client"
import React, { ChangeEvent, useState } from 'react'
// import { SpecialEventKey, eventInput } from './EventKey';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { EventTypeModel } from '@/utils/typescriptModel';
import { useTypedSelector } from '@/GlobalRedux/store';
import {useDispatch} from 'react-redux'
import { saveSingleEvent } from '@/GlobalRedux/Features/SingleEvent/singleEvent';
import { SpecialEventKey, eventInput } from '../../uploadEvent/EventKey';

interface SpecialEvent {
    [eventName: string]: string[];
}

const UpdateEvent = ({EventData, params} : {EventData: EventTypeModel, params: string}) => {
    const [isupdating, setisupdating] = useState(false)
    const dispatch = useDispatch()
    dispatch(saveSingleEvent(EventData))
    
    const [inputs, setinputs] = useState<any>();
    const [data, setdata] = useState<any>()
    const router = useRouter()
    const [selectedDateTime, setSelectedDateTime] = useState<Date | undefined>(undefined);
    
    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        // setdata((prev: typeof data) => ({ ...prev, ['eventTy`pe']: value }))

        // console.log(value)
        SpecialEventKey.forEach((elem: SpecialEvent) => {

            if (elem[value]) {
                setinputs(elem[value])
            }
        })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setisupdating(true)
        // console.log(e.target.musicianNames.value);
        const target = e.target as any;
        const eventName = target.eventName.value
        const eventType  = target.eventType.value
        const eventDate  = target.eventDate.value
        const eventLocation  = target.eventLocation.value
        const organizer  = target.organizer.value
        const attire  = target.attire.value
        const guestCount  = target.guestCount.value
        const specialInstructions  = target.specialInstructions.value
        const eventDesc  = target.eventDesc.value
        const image  = target.image.value
        const musicianNames  = target?.musicianNames?.value
        const celebrantName  = target.celebrantName?.value
        const tributeDetails  = target.tributeDetails?.value
        const musicGenre  = target.musicGenre?.value
        const ticketPrice  = target.ticketPrice?.value


        const obj = {eventType, eventName, eventDate, eventLocation, organizer, attire, guestCount,specialInstructions, eventDesc, image, musicianNames,celebrantName,tributeDetails, musicGenre,ticketPrice}
        const nonEmptyValues = {} as any;

        Object.entries(obj).forEach(([key, value]) => {
            if (value !== '' && value !== undefined) {
                nonEmptyValues[key] = value;
            }
        }); 
        console.log(obj);
        
        try{
            console.log(params)
            const res = await axios.patch('/api/event/UpdateEvent', {params,nonEmptyValues })
            console.log(res);
            router.push('/dashboard')
            
        }catch(error){
            console.log(error)
        }finally{
            setisupdating(false)
        }
        
        
        
        // console.log(data)
            // // Send formData to your API endpoint
        // try {
        //     const res: any = await axios.post('/api/event/createEvent/', data)
        //     console.log(res)
        //     if (res.data?.message) {
        //         router.push('/')
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.name, ':', e.target.value)
        const name = e.target.name
        const val = e.target.value
        setdata((prev: typeof data) => ({ ...prev, [name]: val }))
    }


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg my-5">
                <h1 className="text-2xl font-semibold mb-4">Create Event</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Event Type</label>
                        <select
                            name="eventType"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            // value={formData.eventType}
                            onChange={handleChange}
                            defaultValue={EventData['eventType']}
                        >
                            <option value="">Select Event Type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Musical">Musical</option>
                            <option value="Burial">Burial</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                    {/* {selectedDateTime && (
                        <p>
                            Formatted Date: {format(new Date(selectedDateTime), 'MMMM d, yyyy HH:mm a')}
                        </p>
                    )} */}
                    <SpecialEvent inputs={inputs} handleInputChange={handleInputChange} />
                    <AllEventKeys setSelectedDateTime={setSelectedDateTime} selectedDateTime={selectedDateTime} />

                    {/* Add other input fields here */}
                   {isupdating ?
                <div>Loading...</div>
                :
                
                    <button
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Update Event
                    </button>}
                </form>
            </div>
        </div>
    );
};


export default UpdateEvent

const SpecialEvent = ({ inputs, handleInputChange }: { inputs: string[], handleInputChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    const Event = useTypedSelector((state)=> state.singleEvent.data)
    // console.log(event, 'it me');
   
    
    return (
        <div>
            {
                inputs?.map((elem: string) => (
                    // console.log(elem, 'element')
                    < div className="mb-4" key={elem}>
                        <label className="block text-gray-700 font-semibold mb-1 capitalize">{elem}</label>
                        <input type={elem === 'ticketPrice' ? 'number' : "text"} value={Event[elem]} name={elem} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                ))
            }
        </div>
    )
}
interface AllEventKeysProps {
    // handleInputChange: React.ChangeEventHandler;
    setSelectedDateTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
    selectedDateTime: any
}

const AllEventKeys: React.FC<AllEventKeysProps> = ({  setSelectedDateTime, selectedDateTime }) => {
    const Event = useTypedSelector((state)=> state.singleEvent.data)
    

    const handleDateTimeChange = (date: any) => {
        setSelectedDateTime(date);
    };

    return (
        <div>
            <div >
                {/*  @ts-ignore */}
                <label className="block text-gray-700 font-semibold mb-1 capitalize">Date</label>
                <Datetime value={selectedDateTime} className=' appearance-none shadow border rounded py-3 text-gray-darker px-2' dateFormat="DD-MM-YYYY" onChange={handleDateTimeChange} />

            </div>
          {eventInput
                .filter(event => event.name !== 'eventType') // Filter out the object with name 'eventType'
                .map((event) => (
                < div className="mb-4" key={event.name}>

                    {
                        event.name === 'eventDesc' ?
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1 capitalize">{event.title}</label>
                                <textarea name={event.name} defaultValue={Event[event.name]} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"  cols={parseInt("30")} rows={parseInt("10")}></textarea>
                            </div>
                            :
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1 capitalize">{event.title}</label>
                                <input type="text" name={event.name} defaultValue={Event[event.name]} className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"  />
                            </div>

                    }
                </div>
            ))
            }


        </div >
    )
}