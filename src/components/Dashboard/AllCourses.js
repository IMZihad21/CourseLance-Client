import React from 'react'
import { RatingView } from 'react-simple-star-rating'
import axios from 'axios'

const AllCourses = () => {
    const [ courses, setCourses ] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://courselance.herokuapp.com/courses')
            .then((result) => {
                setCourses(result.data);
            }).catch((err) => {
                console.log(err.response);
            });
    }, [])
    const handleDelete = courseId => {
        if (window.confirm("Do you really want to remove this?")) {
            alert("Removed successfully!")
        }
    };
    return (
        <div className='mt-5'>
            <div className='flex justify-between border-1 shadow-sm border-gray-200 p-2 rounded-sm px-5'>
                <p className='my-auto text-xl'>Course Cover</p>
                <p className='my-auto text-xl'>Course Title</p>
                <p className='my-auto text-xl'>Course Rating</p>
                <p className='my-auto text-xl'>Course Author</p>
                <p className='my-auto text-xl'>Actions</p>
            </div>
            {
                courses.map((course, idx) => <div key={idx} className='flex justify-between border-1 shadow-sm border-gray-200 p-2 rounded-sm px-5 mb-2'>
                    <div className='h-20'>
                        <img className='h-full' src={course.courseCover} alt={course.courseName} />
                    </div>
                    <p className='my-auto text-xl'>{course.courseName}</p>
                    <RatingView className='my-auto' ratingValue={course.courseRating} />
                    <p className='my-auto text-xl'>{course.courseAuthor}</p>
                    <div className='my-auto'>
                        <button onClick={() => handleDelete(course._id)} className='bg-red-600 text-white px-4 py-1 rounded-sm'>Remove</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default AllCourses
