import React, { useState, useEffect } from 'react';
import './TimeLine.css';
import TimeLineInput from './TimeLineInput';
import TimeLinePost from './TimeLinePost';
import TimeLineStories from './TimeLineStories';
import db from '../firebase'

const TimeLine = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
          console.log(snapshot.docs);
        })
    }, [])

    return (
        <section className='timeLine'>
            <TimeLineStories />
            <TimeLineInput />

            {
                posts.map(post => {
                    const {profilePic, image, timestamp, message, username} = post.data
                    return (
                        <TimeLinePost key={post.id} profilePic={profilePic} image={image} timestamp={timestamp} message={message} username={username} />
                    )
                })
            }
        </section>
    )
}

export default TimeLine