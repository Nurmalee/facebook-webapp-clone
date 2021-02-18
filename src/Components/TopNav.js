import React from 'react';
import './TopNav.css';
import { GoSearch } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';
import Avatar from '@material-ui/core/Avatar';
import { topNavArr } from '../Data/data'
import { useStateValue } from '.././StateProvider'

const TopNav = () => {

    const [{user}, dispatch] = useStateValue()

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
                {topNavArr.slice(0,5).map(({title, Icon}, i) => {
                    return (
                    <li> 
                        <Icon className='topNav__icon'/> 
                        <span className="after">{title}</span> 
                    </li>
                    )
                    })
                }
            </ul>

            <ul className="topNav__right">
                <div className="avatar-container">
                    <Avatar src={user.photoURL} className='avatar' />
                    <h4>{user.displayName}</h4>
                </div>
                {topNavArr.slice(5).map(({title, Icon}, i) => {
                    return (
                    <li> 
                        <Icon className='topNav__icon'/> 
                        <span className="after">{title}</span> 
                    </li>
                    )
                    })
                }
            </ul>

        </nav>
    )
}

export default TopNav