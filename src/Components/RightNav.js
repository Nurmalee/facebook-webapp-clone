import React from 'react'
import './RightNav.css'
import { rightNavArr } from ".././Data/data";

const RightNav = () => {
    return (
        <section className='rightNav'>
            {
               rightNavArr.map((navItem, i) => {
                   const {title, icon} = navItem
                   return (
                        <div className='rightNav__item' key={i} >
                            {icon}
                            <p>{title}</p>
                        </div>
                   )
               })
            }
        
        </section>
    )
}

export default RightNav
