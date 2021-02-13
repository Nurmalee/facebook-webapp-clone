import React from 'react'
import './LeftNav.css'
import { leftNavArr } from '.././Data/data'

const LeftNav = () => {
    
    return (
        <section className='leftNav'>
            {
               leftNavArr.map((navItem, i) => {
                   const {title, icon} = navItem
                   return (
                        <div className='leftNav__item' key={i} >
                            {icon}
                            <p>{title}</p>
                        </div>
                   )
               })
            }
        
        </section>
    )
}

export default LeftNav
