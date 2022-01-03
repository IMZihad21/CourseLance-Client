import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import CourseDetails from './components/Courses/CourseDetails';
import CourseList from './components/Courses/CourseList';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList />}>
          <Route path=":courseId" element={CourseDetails} />
        </Route>
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
