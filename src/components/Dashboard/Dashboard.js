import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import CustomLink from '../Utilities/CustomLink'
import AddCourse from './AddCourse'
import AllCourses from './AllCourses'
import Welcome from './Welcome'

const Dashboard = () => {
    return (
        <div className='min-h-[45vh] flex divide-x-4'>
            <div className='w-36 text-center'>
                <ul>
                    <li className='py-2 font-semibold text-xl'>
                        <CustomLink to="allCourses">All Courses</CustomLink>
                    </li>
                    <li className='py-2 font-semibold text-xl'>
                        <CustomLink to="addCourses">Add Courses</CustomLink>
                    </li>
                </ul>
            </div>
            <div className='px-5'>
                <Outlet />
                <Routes>
                    <Route index={true} element={<Welcome />} />
                    <Route path="allCourses" element={<AllCourses />} />
                    <Route path="addCourses" element={<AddCourse />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard
