import React from 'react';
import './TopNav.css';
import { GoSearch } from 'react-icons/go';
import { AiFillHome, AiOutlineShop, AiOutlinePlus } from 'react-icons/ai';
import { FaFacebookMessenger, FaBell, FaFacebook } from 'react-icons/fa';
import { BsCollectionPlay } from 'react-icons/bs';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CgGames } from 'react-icons/cg';
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from '.././StateProvider'

const TopNav = () => {

    const [{user}, dispatch] = useStateValue()

    //returns all top nav icon layout
    const navIconTemp = (Icon) => {
        return (
            <li> <Icon className='topNav__icon'/> </li>
        )
    }

    return (
        <nav className='topNav'>
            <div className='topNav__left'>
                <FaFacebook className='facebook'/>
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
                <div className="avatar-container">
                    <Avatar src={user.photoURL} className='avatar' />
                    <h4>{user.displayName}</h4>
                </div>
                {navIconTemp(AiOutlinePlus)}
                {navIconTemp(FaFacebookMessenger)}
                {navIconTemp(FaBell)}
                {/* {navIconTemp(TiArrowSortedDown)} */}
            </ul>
        </nav>
    )
}

export default TopNav