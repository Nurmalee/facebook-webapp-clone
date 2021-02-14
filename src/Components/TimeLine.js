import React from 'react';
import './TimeLine.css';
import Avatar from '@material-ui/core/Avatar';
import { storiesArr } from '.././Data/data'
import { RiVideoAddFill } from 'react-icons/ri';
import { FaPhotoVideo, FaRegSmile } from 'react-icons/fa';


const me = 'https://scontent.flos2-2.fna.fbcdn.net/v/t1.0-9/17883993_1669103613106474_5182970347475567830_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHgaNLcQa41UI8FWkmrpHls8u1gmV9ka4Dy7WCZX2RrgINa1meDFC3jMrBEQ6MvnEKKjGZXIrlRp3BlYvao3q-V&_nc_ohc=OXvCFWDJMiEAX-aS8Hc&_nc_ht=scontent.flos2-2.fna&oh=12d08044c1006f1c966ba5c84ef82eda&oe=604CE634'

const TimeLine = () => {

    const inputExtraIconTemp = (Icon, title) => {
        return (
            <div className='input__extra__item'> 
                <Icon className='input__extra__icon'/> 
                <p>{title}</p> 
            </div>
        )
    }

    return (
        <section className='timeLine'>
            <div className='timeLine__stories'>
                {
                    storiesArr.map((story, i) => {
                        const {name, img1, img2} = story
                        return (
                            <div className='timeLine__story' key={i} >
                                <img src={img1} alt={name} />
                                <Avatar src={img2} className='timeLine__story__avatar' />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="timeLine__input">
                <div className="input__input">
                    <Avatar src={me} />
                    <input type="text" placeholder="What's on your mind, Nurudeen?"/>
                </div>
                <hr />
                <div className="input__extra">
                    {inputExtraIconTemp(RiVideoAddFill, 'live video')}
                    {inputExtraIconTemp(FaPhotoVideo, 'photo/video')}
                    {inputExtraIconTemp(FaRegSmile, 'feeling/activity')}
                </div>
            </div>

            
        </section>
    )
}

export default TimeLine


  // const timeLineStoryTemp = (img1, img2, name) => {
    //     return (
    //         <div className='timeLine__story'>
    //             <img src={img1} alt={name} />
    //             <Avatar src={img2} className='timeLine__story__avatar' />
    //             <p>{name}</p>
    //         </div>
           
    //     )

    // }

  {/* {timeLineStoryTemp(me, me, 'Nurudeen Lawal')}
                {timeLineStoryTemp(me, me, 'Nurudeen Lawal')}
                {timeLineStoryTemp(me, me, 'Nurudeen Lawal')}
                {timeLineStoryTemp(me, me, 'Nurudeen Lawal')}
                {timeLineStoryTemp(me, me, 'Nurudeen Lawal')} 
    */}