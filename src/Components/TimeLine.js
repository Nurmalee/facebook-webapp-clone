import React, { useState, useEffect } from 'react';
import './TimeLine.css';
import TimeLineInput from './TimeLineInput';
import TimeLinePost from './TimeLinePost';
import TimeLineStories from './TimeLineStories';
import db from '.././firebase'

const TimeLine = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data})))
          console.log(snapshot.docs);
        })
    }, [])

    return (
        <section className='timeLine'>
            <TimeLineStories />
            <TimeLineInput />

            {
                posts.map(post => {
                    // const {profilePic, image, timestamp, message, username} = post.data
                    return (
                        <TimeLinePost key={post.id} profilePic={post.data.profilePic} image={post.data.image} timestamp={post.data.timestamp} message={post.data.message} username={post.data.username} />
                    )
                })
            }
        </section>
    )
}

export default TimeLine