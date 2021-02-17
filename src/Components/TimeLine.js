import React, { useState, useEffect } from 'react';
import './TimeLine.css';
import TimeLineInput from './TimeLineInput';
import TimeLinePost from './TimeLinePost';
import TimeLineStories from './TimeLineStories';
import db from '../firebase'

const TimeLine = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy('createdAt', 'desc').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [])

    return (
        <section className='timeLine'>
            <TimeLineStories />
            <TimeLineInput />

            {
                posts.map(post => {
                    const {profilePic, image, createdAt, message, username} = post.data
                    return (
                        <TimeLinePost key={post.id} profilePic={profilePic} image={image} createdAt={createdAt} message={message} username={username} />
                    )
                })
            }
        </section>
    )
}

export default TimeLine