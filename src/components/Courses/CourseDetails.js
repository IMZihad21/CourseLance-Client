import React from 'react'
import { fakeData } from '../../fakeData'
import { RatingView } from 'react-simple-star-rating';

const CourseDetails = () => {
    const { courseName, courseCover, courseRating, courseDesription, courseReviews, courseAuthor, courseItems, courseContents } = fakeData;
    return (
        <div className='my-10'>
            <div className='flex bg-black text-white px-44 rounded h-80'>
                <div className='h-full'>
                    <img className='h-full' src={courseCover} alt="" />
                </div>
                <div className='ml-20 my-auto space-y-3'>
                    <h1 className='text-5xl font-bold'>{courseName}</h1>
                    <p className='text-md'>{courseDesription.substring(0, 100) + "..."}</p>
                    <div className='flex space-x-5' >
                        <RatingView ratingValue={courseRating} />
                        <p className='text-sm my-auto'>(  {courseReviews.length} Ratings  )</p>
                    </div>
                    <p className='text-sm'>Created by <span className='font-semibold'>{courseAuthor}</span></p>
                </div>
            </div>
            <div className='mt-10 mx-44'>
                <div className='border border-gray-400 p-10 shadow-sm'>
                    <h1 className='text-2xl font-semibold'>What you will learn</h1>
                    <ul className='mt-5 space-y-1'>
                        {courseItems.map((item, index) => <li key={`courseItems-${index}`}>
                            &raquo; <span className='ml-3'>{item}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className='mt-10 mx-44'>
                <div className='border border-gray-400 p-10 shadow-sm'>
                    <h1 className='text-2xl font-semibold'>Course content</h1>
                    <ul className='mt-5 space-y-1'>
                        {courseContents.map((item, index) => <li key={`courseItems-${index}`}>
                            &#8883; <span className='ml-3'>{item}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className='mt-10 mx-44'>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='mt-5'>{courseDesription}</p>
            </div>
            <div className='mt-10 mx-44'>
                <h1 className='text-2xl font-semibold'>Course Reviews</h1>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {
                        courseReviews.map((review, idx) => <div key={idx} className='border shadow-md rounded text-center'>
                            <h1 className='text-xl font-bold mb-2'>{review.reviewer}</h1>
                            <RatingView ratingValue={review.rating} />
                            <p className='text-lg my-2'>{review.review}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
