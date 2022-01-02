import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import Register from './components/Home/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
