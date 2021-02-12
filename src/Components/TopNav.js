import React from 'react'
import { FaFacebook } from 'react-icons/fa';

const TopNav = () => {
    return (
        <nav>
            <div className='topNav__left bg-white-100'>
                <FaFacebook className='w-11 h-11 text-blue-500' />
                <input type="text" className='w-32 bg-gray-100'/>
            </div>
        </nav>
    )
}

export default TopNav