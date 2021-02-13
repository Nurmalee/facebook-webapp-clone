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
                       <LeftNavItem key={i} title={title} icon={icon} />
                   )
               })
            }
        
        </section>
    )
}

export const LeftNavItem = ({title, icon}) => {
    return (
        <div className='leftNav__item'>
            {icon}
            <p>{title}</p>
        </div>
    )
}

export default LeftNav
