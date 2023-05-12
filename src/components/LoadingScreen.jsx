import React from 'react'
import { logo } from '../assets';
import '../constants/style.css';

function LoadingScreen() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black" style={{ zIndex: 9999 }}>
            <div className='wallzio'>
                <img src={logo} className='logo' alt="" />
            </div>
        </div>
    )
}

export default LoadingScreen