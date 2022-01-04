import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import AllCourses from './AllCourses'
import Welcome from './Welcome'

const Dashboard = () => {
    return (
        <div className='min-h-[45vh] flex divide-x-4'>
            <div className='w-36 text-center'>
                <ul>
                    <li className='py-2 font-semibold text-xl'>
                        <Link to="allCourses">All Courses</Link>
                    </li>
                </ul>
            </div>
            <div className='px-5'>
                <Outlet />
                <Routes>
                    <Route index={true} element={<Welcome />} />
                    <Route path="allCourses" element={<AllCourses />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard
