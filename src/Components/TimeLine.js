import React from 'react';
import './TimeLine.css';
import Avatar from '@material-ui/core/Avatar';
import { storiesArr } from '.././Data/data'

// const me = 'https://scontent.flos2-2.fna.fbcdn.net/v/t1.0-9/17883993_1669103613106474_5182970347475567830_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeHgaNLcQa41UI8FWkmrpHls8u1gmV9ka4Dy7WCZX2RrgINa1meDFC3jMrBEQ6MvnEKKjGZXIrlRp3BlYvao3q-V&_nc_ohc=OXvCFWDJMiEAX-aS8Hc&_nc_ht=scontent.flos2-2.fna&oh=12d08044c1006f1c966ba5c84ef82eda&oe=604CE634'

const TimeLine = () => {

    // const timeLineStoryLayout = (img1, img2, name) => {
    //     return (
    //         <div className='timeLine__story'>
    //             <img src={img1} alt={name} />
    //             <Avatar src={img2} className='timeLine__story__avatar' />
    //             <p>{name}</p>
    //         </div>
           
    //     )

    // }

    return (
        <section className='timeLine'>
            <div className='timeLine__stories'>
                {/* {timeLineStoryLayout(me, me, 'Nurudeen Lawal')}
                {timeLineStoryLayout(me, me, 'Nurudeen Lawal')}
                {timeLineStoryLayout(me, me, 'Nurudeen Lawal')}
                {timeLineStoryLayout(me, me, 'Nurudeen Lawal')}
                {timeLineStoryLayout(me, me, 'Nurudeen Lawal')} */}

                {
                    storiesArr.map((story, i) => {
                        const {name, img1, img2} = story
                        return (
                            <div className='timeLine__story'>
                                <img src={img1} alt={name} />
                                <Avatar src={img2} className='timeLine__story__avatar' />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>

            
        </section>
    )
}

export default TimeLine
