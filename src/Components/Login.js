import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { auth, provider } from '.././firebase' 
import { FiKey } from 'react-icons/fi';
import './Login.css';
import { SET_USER } from '.././reducer'
import { useStateValue } from '.././StateProvider'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const handleLogin = () => {
        auth.signInWithPopup(provider).then((result) => {
           dispatch({
               type: SET_USER,
               payload: result.user
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
                <h1>unlock <FiKey /> access to facebook</h1>
              
                <Avatar src='https://avatars.githubusercontent.com/u/70635657?s=460&u=eea4bb2b6dff02e5993458cecc93018eca3bd17d&v=4' className='login__creator' />
                <h4>Powered by TheLeeEffect </h4>
            </div>
        
            <button type='submit' onClick={handleLogin}>login </button> 
        </div>
        </>
       
    )
}

export default Login


