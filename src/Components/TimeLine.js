import React from 'react';
import './TimeLine.css';
import TimeLineInput from './TimeLineInput';
import TimeLinePost from './TimeLinePost';
import TimeLineStories from './TimeLineStories';

const TimeLine = () => {   
    return (
        <section className='timeLine'>
            <TimeLineStories />
            <TimeLineInput />
            <TimeLinePost />
            <TimeLinePost />
            <TimeLinePost />
            <TimeLinePost />
        </section>
    )
}

export default TimeLine