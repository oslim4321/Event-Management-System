import ProfileAvatar from '@/components/ProfileAvatar'
import { Comment } from '@/utils/typescriptModel'
import { format } from 'date-fns'
import React from 'react'

const ReadComments = ({ comment }: { comment: Comment[] }) => {
    return (

        <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100  bg-white min-w-screen animation-fade animation-delay  px-0 px-8 mx-auto sm:px-12 xl:px-5">

            <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center sm:mx-0">
                All comments on this post
            </p>
            {/* <!--comment 1--> */}
            {comment?.length > 0 ?
                comment.map((elem, i) => (

                    <div key={i} className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

                        {/* <a href="#" className="flex items-center mt-6 mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" /> */}
                        <div>
                            <ProfileAvatar />
                        </div>
                        {/* </a> */}

                        <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By {elem.userName}</h3>
                            {/* <p className="text-sm font-bold text-gray-300">{format(new Date())}</p> */}
                            <p className="text-sm font-bold text-gray-300">{format(new Date(elem?.createdAt), 'MMMM d, yyyy HH:mm a')}</p>
                            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                                {elem.text}</p>
                        </div>

                    </div>
                ))
                :
                'No Comment To Load'
            }
            {/* <!--comment 2--> */}
            {/* <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

                <a href="#" className="flex items-center mt-6 mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                </a>

                <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
                    <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Especially I dont understand the concepts of multiple models.What really is the difference between the blog model and blogApp model? Am stuck</p>
                </div>
            </div> */}

        </div >
    )
}

export default ReadComments