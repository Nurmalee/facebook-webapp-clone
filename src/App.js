// import React, { useState, useEffect } from 'react'
import './App.css';
import TopNav from './Components/TopNav';
import LeftNav from './Components/LeftNav';
import TimeLine from './Components/TimeLine';
import RightNav from './Components/RightNav';
import Login from './Components/Login';
import { useStateValue } from './StateProvider'



function App() {
  // const [width, setWidth] = useState('')
  // useEffect(() => {
  //   const windowWidth = window.innerWidth
  //   setWidth(windowWidth)
  // }, [])

  const [{user}, dispatch] = useStateValue()

  if(!user){
    return(
      <div className='app'>
        <Login />
      </div>
    )
  }

  return (
   
    <div className='app'>
          <TopNav />
          <div className='app__body'>
            <LeftNav />
            <TimeLine />
            <RightNav />
          </div>
    </div>
  );
}

export default App;
