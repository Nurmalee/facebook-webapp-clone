import React from 'react';
import './TimeLinePost.css';
import Avatar from '@material-ui/core/Avatar';
import { BsThreeDots } from 'react-icons/bs';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { AiOutlineLike } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { VscLiveShare } from 'react-icons/vsc';



const me = 'https://scontent.flos2-2.fna.fbcdn.net/v/t1.0-9/17883993_1669103613106474_5182970347475567830_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHgaNLcQa41UI8FWkmrpHls8u1gmV9ka4Dy7WCZX2RrgINa1meDFC3jMrBEQ6MvnEKKjGZXIrlRp3BlYvao3q-V&_nc_ohc=OXvCFWDJMiEAX-aS8Hc&_nc_ht=scontent.flos2-2.fna&oh=12d08044c1006f1c966ba5c84ef82eda&oe=604CE634'

const TimeLinePost = () => {

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
                    <Avatar src={me} className='timeLine__postTopAvatar' />
                    <div className='timeLine__postTopUser'>
                        <h2>Lawal Nurudeen</h2>
                        <p>16:04GMT  14-02-2021 . <GiEarthAfricaEurope/> </p>
                    </div>
                </div>
                <BsThreeDots className='timeLine__postTopDots' />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi ea necessitatibus porro, velit fugit beatae magnam nihil amet iure eveniet esse ab quia quis consequatur modi quos laborum molestias.</p>

            <div className="timeLine__postImage">
                <img src='https://scontent-los2-1.xx.fbcdn.net/v/t1.0-9/s1080x2048/150266226_10225075326215852_1826370256042806218_o.jpg?_nc_cat=111&ccb=3&_nc_sid=825194&_nc_eui2=AeGIa6WXfEHxRgqpnBCxYGPjn6tsuoRV8vyfq2y6hFXy_Lro_VMDz_tuSlPXhcEsBHHpCdmlrB2k5Wu899q_UTgQ&_nc_ohc=W_qOd9njHfQAX8xDJRO&_nc_ht=scontent-los2-1.xx&tp=7&oh=9e60e262eb454a047e520db897cfce31&oe=604DED30' alt=""/>
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
