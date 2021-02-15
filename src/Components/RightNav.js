import React, { useState, useEffect } from 'react';
import './RightNav.css';
import Avatar from '@material-ui/core/Avatar';
// import { rightNavArr } from ".././Data/data";

const randomUsersUrl = 'https://randomuser.me/api/?results=20'

const RightNav = () => {
    const [contacts, setContacts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        try {
            const getUsers = async() => {
                const resp = await fetch(randomUsersUrl)
                const users = await resp.json()
                setContacts(users.results)
                console.log(users.results);
            }
            getUsers()
            setIsLoading(false)
        }
        catch(err) {
            alert(err.message);
        }
    }, [])

    if(isLoading){
        return (
            <section className='rightNav'>
                <h1>LOADING....</h1>
            </section>
        )
    }

    return (
        <section className='rightNav'>
            {
               contacts.map((navItem, i) => {
                   const {name:{first, last}, picture:{large}, location:{country}} = navItem
                   return (
                        <div className='rightNav__item' key={i} >
                            <Avatar src={large} className='contact__avatar' />
                            <p>{first} {last}, {country} </p>
                        </div>
                   )
               })
            }
        
        </section>
    )
}

export default RightNav
