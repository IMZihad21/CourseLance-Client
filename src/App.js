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
import BlogDetails from './components/Blogs/BlogDetails';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/details/:blogId" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
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
