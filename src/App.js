import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Authentication from './components/Authentication/Authentication'
import AuthProvider from './contexts/AuthProvider';
import Profile from './components/Home/Profile/Profile';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
