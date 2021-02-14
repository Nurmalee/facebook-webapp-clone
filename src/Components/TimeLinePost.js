import React from 'react';
import './TimeLinePost.css';
import Avatar from '@material-ui/core/Avatar';
import { BsThreeDots } from 'react-icons/bs';
import { GiEarthAfricaEurope } from 'react-icons/gi';


const me = 'https://scontent.flos2-2.fna.fbcdn.net/v/t1.0-9/17883993_1669103613106474_5182970347475567830_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHgaNLcQa41UI8FWkmrpHls8u1gmV9ka4Dy7WCZX2RrgINa1meDFC3jMrBEQ6MvnEKKjGZXIrlRp3BlYvao3q-V&_nc_ohc=OXvCFWDJMiEAX-aS8Hc&_nc_ht=scontent.flos2-2.fna&oh=12d08044c1006f1c966ba5c84ef82eda&oe=604CE634'

const TimeLinePost = () => {
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
        </div>
    )
}

export default TimeLinePost
