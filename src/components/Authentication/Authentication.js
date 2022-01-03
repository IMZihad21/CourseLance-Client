import React, { useState } from 'react'
import Login from '../Home/Login/Login/Login'
import Register from '../Home/Login/Register/Register'

const Authentication = () =>{ 
    const [logIn,setLogIn] = useState(false);
    return (
        <div>   
            {
                logIn === true ?
                <Login setLogIn={setLogIn} /> :
                <Register setLogIn={setLogIn} />
            }
        </div>
    )
}

export default Authentication
