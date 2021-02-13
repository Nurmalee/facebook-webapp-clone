import React from 'react'
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
        <div>
            {/* {icon && <Icon />} */}
            <p>{title}</p>
        </div>
    )
}

export default LeftNav
