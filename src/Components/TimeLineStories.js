import React from 'react';
import './TimeLineStories.css';
import Avatar from '@material-ui/core/Avatar';
import { storiesArr } from '.././Data/data';

const TimeLineStories = () => {
    return (
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

    )
}

export default TimeLineStories

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
