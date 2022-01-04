import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication'
import AuthProvider from './contexts/AuthProvider';
import Profile from './components/Home/Profile/Profile';
import CourseList from './components/Courses/CourseList';
import CourseDetails from './components/Courses/CourseDetails';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
