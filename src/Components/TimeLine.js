import React from 'react';
import './TimeLine.css';
import Avatar from '@material-ui/core/Avatar';
import { storiesArr } from '.././Data/data'
import TimeLineInput from './TimeLineInput';

const TimeLine = () => {   
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

            <TimeLineInput />

            
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