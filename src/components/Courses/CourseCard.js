import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({ product }) => {
    const { courseName, courseCover, courseRating, courseDesription, courseReviews, courseAuthor, courseItems, courseContents } = product;
    const _id = 1;
    return (
        <div className='bg-white shadow-xl pb-5 rounded-sm text-center'>
            <div className='w-full h-56 mx-auto'>
                <img className='w-full h-full rounded-t-sm' src={courseCover} alt={courseName} />
            </div>
            <div className='mt-2'>
                <div className='flex justify-around text-sm'>
                    <p>{courseContents.length * 5} Lectures</p>
                    <p>{courseContents.length * 50} Minutes</p>
                </div>
                <h1 className='text-2xl font-bold mt-2 text-black'>{courseName}</h1>
                <p className='mt-2 font-semibold'>{courseDesription.split(' ').slice(0, 10).toString().replace(/,/g, ' ') + '...'}</p>
            </div>
            <Link to={`/courses/${_id}`}>
                <button className='bg-black mt-4 w-full text-white py-2'><i class="fas fa-cart-plus"></i> Details</button>
            </Link>
        </div>
    )
}

export default CourseCard
