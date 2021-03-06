import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { _id, courseName, courseCover, courseDesription, courseContents } = course;
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
                <p className='mt-2 font-semibold h-12 overflow-hidden'>{courseDesription}</p>
            </div>
            <Link to={`/courses/${_id}`}>
                <button className='bg-black mt-4 w-full text-white py-2'>Details<i className="fas fa-arrow-right pl-4"></i></button>
            </Link>
        </div>
    )
}

export default CourseCard
