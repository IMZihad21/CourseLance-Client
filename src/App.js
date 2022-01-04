import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication'
import AuthProvider from './contexts/AuthProvider';
import Profile from './components/Home/Profile/Profile';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetails';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
