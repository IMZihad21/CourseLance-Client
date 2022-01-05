import React from 'react';
import CourseCard from './CourseCard';
import axios from 'axios'

const CourseList = () => {
    const [ courses, setCourses ] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://courselance.herokuapp.com/courses')
            .then((result) => {
                setCourses(result.data);
            }).catch((err) => {
                console.log(err.response);
            });
    }, [])
    return (
        <div className='mt-5'>
            <div>
                <h1 className='text-3xl font-semibold my-1 text-center'>All Courses</h1>
            </div>
            <div className='mt-2 rounded-lg p-5 md:grid grid-cols-4 gap-3'>
                {
                    courses.map((course, idx) => <CourseCard key={course._id} course={course} />)
                }
            </div>
        </div>
    )
}

export default CourseList
