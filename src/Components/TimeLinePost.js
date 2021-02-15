import React from 'react';
import './TimeLinePost.css';
import Avatar from '@material-ui/core/Avatar';
import { BsThreeDots } from 'react-icons/bs';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { AiOutlineLike } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { VscLiveShare } from 'react-icons/vsc';

const TimeLinePost = ({ profilePic, image, timestamp, message, username }) => {
    
    const timeLine__postButtonTemp = (Icon, title) => {
        return (
            <div className='input__extra__item'> 
                <Icon className='input__extra__icon'/> 
                <p>{title}</p> 
            </div>
        )
    }

    return (
        <div className='timeLine__post'>
            <div className='timeLine__postTop'>
                <div className='timeLine__postTopInfo'>
                    <Avatar src={profilePic} className='timeLine__postTopAvatar' />
                    <div className='timeLine__postTopUser'>
                        <h2>{username}</h2>
                        <p>{new Date(timestamp?.toDate()).toUTCString()} .<GiEarthAfricaEurope/> </p>
                    </div>
                </div>
                <BsThreeDots className='timeLine__postTopDots' />
            </div>

            <p>{message}</p>

            <div className="timeLine__postImage">
                <img src={image} alt="uploaded image"/>
            </div>

            <div className="timeLine__postButtons">
                {timeLine__postButtonTemp(AiOutlineLike, 'like')}
                {timeLine__postButtonTemp(BiMessage, 'comment')}
                {timeLine__postButtonTemp(VscLiveShare, 'share')}
            </div>
        </div>
    )
}

export default TimeLinePost
