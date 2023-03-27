import React from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'
import './style.css';
// import logo from '../../logo.png';

export default function Header() {
    return (
        <>
            <div className='site-heading h-20 bg-[#01B9A0]'>
               
                    <h3 className="text-3xl font-bold pt-4 text-white">Tekion Social App</h3>

                <div className='flex flec-col mt-10 user-login-forms'>
                    <Register />
                    <Login />
                </div>
            </div>
        </>
    )
}
