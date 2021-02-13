import React from 'react';
import './TopNav.css';
import { GoSearch } from 'react-icons/go';
import { AiFillHome, AiOutlineShop, AiOutlinePlus } from 'react-icons/ai';
import { FaFacebookMessenger, FaBell } from 'react-icons/fa';
import { BsCollectionPlay } from 'react-icons/bs';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CgGames } from 'react-icons/cg';
import facebook_logo from '.././Images_templates/facebook_logo.png';


const TopNav = () => {

    //returns all top nav icon layout
    const navIconTemp = (Icon) => {
        return (
            <li> <Icon className='topNav__icon'/> </li>
        )
    }

    return (
        <nav className='topNav'>
            <div className='topNav__left'>
                <img src={facebook_logo} alt="facebook_logo"/>
                <div className='topNav__search'>
                    <GoSearch />
                    <input type="text" placeholder='Search Clonebook'/>
                </div>
            </div>
            <ul className="topNav__center">
                {navIconTemp(AiFillHome)}
                {navIconTemp(BsCollectionPlay)}
                {navIconTemp(AiOutlineShop)}
                {navIconTemp(HiOutlineUserGroup)}
                {navIconTemp(CgGames)}
            </ul>
            <ul className="topNav__right">
                {navIconTemp(AiOutlinePlus)}
                {navIconTemp(FaFacebookMessenger)}
                {navIconTemp(FaBell)}
                {navIconTemp(TiArrowSortedDown)}
                {/* {navLeftIconsTemp(SiNintendogamecube)} */}
            </ul>
        </nav>
    )
}

export default TopNav