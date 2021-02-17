import React from 'react'
import './LeftNav.css'
import { leftNavArr } from '.././Data/data'
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from '.././StateProvider'

const LeftNav = () => {

    const [{user}, dispatch] = useStateValue()

    const leftNavUserTemp = () => {
        return (
            <div className='leftNav__item' >
                <Avatar  src={user.photoURL} />
                <p>{user.displayName}</p>
            </div>
        )
    }
    
    return (
        <section className='leftNav'>
            {leftNavUserTemp()}
            {
               leftNavArr.map((navItem, i) => {
                   const {title, Icon} = navItem
                   return (
                        <div className='leftNav__item' key={i} >
                            {/* {icon} */}
                            <Icon className='leftNav__icon'/>
                            <p>{title}</p>
                        </div>
                   )
               })
            }
        
        </section>
    )
}

export default LeftNav
