import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import Login from '../Home/Login/Login/Login'
import Register from '../Home/Login/Register/Register'
import Profile from '../Home/Profile/Profile';

const Authentication = () => {
    const { user } = useAuth();
    const [ logIn, setLogIn ] = useState(false);
    return (
        <div className='mb-5 min-h-[230px]'>
            {
                user.email ?
                    <Profile /> :
                    logIn === true ?
                        <Login setLogIn={setLogIn} /> :
                        <Register setLogIn={setLogIn} />
            }
        </div>
    )
}

export default Authentication
