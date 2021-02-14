import React, { useState, useEffect } from 'react';
import './TimeLineInput.css';
import Avatar from '@material-ui/core/Avatar';
import { RiVideoAddFill } from 'react-icons/ri';
import { FaPhotoVideo, FaRegSmile } from 'react-icons/fa';

const me = 'https://scontent.flos2-2.fna.fbcdn.net/v/t1.0-9/17883993_1669103613106474_5182970347475567830_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHgaNLcQa41UI8FWkmrpHls8u1gmV9ka4Dy7WCZX2RrgINa1meDFC3jMrBEQ6MvnEKKjGZXIrlRp3BlYvao3q-V&_nc_ohc=OXvCFWDJMiEAX-aS8Hc&_nc_ht=scontent.flos2-2.fna&oh=12d08044c1006f1c966ba5c84ef82eda&oe=604CE634'

const TimeLineInput = () => {

    const [textInput, setTextInput] = useState('')
    const [imageFile, setImageFile] = useState('')

    const handleFormSubmission = (e) => {
        e.preventDefault()

        setTextInput('')
        setImageFile('')
    }

    const inputExtraIconTemp = (Icon, title) => {
        return (
            <div className='input__extra__item'> 
                <Icon className='input__extra__icon'/> 
                <p>{title}</p> 
            </div>
        )
    }

    return (
        <div className="timeLine__input">
            <div className="input__input">
                <Avatar src={me} />
                <form>
                    <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)} placeholder="What's on your mind, Nurudeen?"/>

                    <input type="text" value={imageFile} onChange={e => setImageFile(e.target.value)} placeholder="import an image"/>

                    <button onClick={handleFormSubmission} type='submit' style={{display: 'none'}}>click</button>
                </form>
            </div>
            <hr />
            <div className="input__extra">
                {inputExtraIconTemp(RiVideoAddFill, 'live video')}
                {inputExtraIconTemp(FaPhotoVideo, 'photo/video')}
                {inputExtraIconTemp(FaRegSmile, 'feeling/activity')}
            </div>
    </div>
    )
}

export default TimeLineInput
