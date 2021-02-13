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
import Avatar from '@material-ui/core/Avatar';


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
                <div className="avatar-container">
                    <Avatar src='https://scontent.flos2-2.fna.fbcdn.net/v/t1.0-9/17883993_1669103613106474_5182970347475567830_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHgaNLcQa41UI8FWkmrpHls8u1gmV9ka4Dy7WCZX2RrgINa1meDFC3jMrBEQ6MvnEKKjGZXIrlRp3BlYvao3q-V&_nc_ohc=OXvCFWDJMiEAX-aS8Hc&_nc_ht=scontent.flos2-2.fna&oh=12d08044c1006f1c966ba5c84ef82eda&oe=604CE634' className='avatar' />
                    <h4>Nurudeen</h4>
                </div>
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