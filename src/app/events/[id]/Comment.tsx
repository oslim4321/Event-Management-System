import { UserTypeModel } from '@/utils/typescriptModel'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const Comment = ({ event }: { event: string | undefined }) => {
    const { data }: { data: any } = useSession()
    const [text, settext] = useState('')
    const [loading, setloading] = useState(false)
    async function postComment() {
        setloading(true)
        console.log(data)
        const userName = `${data?.newUser.lastName} ${data?.newUser.firstName}`;
        const comment = { text, event, user: data?.newUser?._id, userName }
        try {
            const { data }: any = await axios.post('/api/event/comments', comment)
            if (data.message) {
                alert('Posted')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }

    }
    return (
        <div>
            <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">

                <div className="w-full mt-16 md:mt-0 ">
                    <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                        <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
                        {/* <textarea type="text" name="comment" className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Write your comment" ></textarea> */}
                        <textarea onChange={(e) => settext(e.target.value)} className="w-full px-4 py-3 mb-4 border border-2  border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none hover:border-tranparent" cols={Number(30)} rows={Number(10)}></textarea>
                        {/* <input type="submit" value="Submit comment" name="submit" className=" text-white px-4 py-3 bg-blue-500  rounded-lg" /> */}
                        {data ? <button disabled={loading} onClick={postComment} className=" text-white px-4 py-3 bg-blue-500  rounded-lg" >{loading ? 'Posting' : 'Commment'}</button> :
                            <button>Sign in to Comment</button>
                        }
                    </div>
                </div>
            </div></div >
    )
}

export default Comment