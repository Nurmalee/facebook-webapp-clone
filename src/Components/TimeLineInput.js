import React, { useState } from 'react';
import './TimeLineInput.css';
import Avatar from '@material-ui/core/Avatar';
import { RiVideoAddFill } from 'react-icons/ri';
import { FaPhotoVideo, FaRegSmile } from 'react-icons/fa';
import { useStateValue } from '.././StateProvider'
import db from '../firebase'
import firebase from 'firebase/app'

const TimeLineInput = () => {
    const [{user}, dispatch] = useStateValue()

    const [textInput, setTextInput] = useState('')
    const [imageFile, setImageFile] = useState('')

    const handleFormSubmission = (e) => {
        e.preventDefault()

        if(textInput){
            db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: imageFile,
                message: textInput,
                profilePic: user.photoURL,
                username: user.displayName,
            })
        }

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
                <Avatar src={user.photoURL} />
                <form>
                    <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)} placeholder={`What's on your mind, ${user.displayName}?`}/>

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
