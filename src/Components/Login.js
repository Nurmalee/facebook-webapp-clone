import React, { useEffect } from 'react'
import { auth, provider } from '.././firebase' 
import { FiKey } from 'react-icons/fi';
import './Login.css'
import { actionTypes } from '.././reducer'
import { useStateValue } from '.././StateProvider'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const handleLogin = () => {
        auth.signInWithPopup(provider).then((result) => {
           dispatch({
               type: actionTypes.SET_USER,
               user: result.user
           })
        })
        .catch((error) => alert(error))
    }


    return (
        <>
        <div className="login__background">
            {/* <img src='https://wallpaperaccess.com/full/1493657.jpg' alt="sdsd"/> */}
        </div>
         <div className='login'>
            <div className="login__logo">
                <img src="https://images.vexels.com/media/users/3/140172/isolated/preview/73e2a4a4ce47c18c4750982183ec753e-facebook-silver-icon-by-vexels.png" alt=""/>
                <h1>unlock access to clonebook <FiKey /> </h1>
            </div>
            <button type='submit' onClick={handleLogin}>login</button> 
        </div>
        </>
       
    )
}

export default Login


