import React from 'react';
import './TopNav.css';
import { FaFacebook } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';


const TopNav = () => {
    return (
        <nav>
            <div className='topNav__left'>
                <FaFacebook />
                <div>
                    <GoSearch />
                    <input type="text" placeholder='Search Clonebook'/>
                </div>
            </div>
        </nav>
    )
}

export default TopNav