// import React, { useState, useEffect } from 'react'
import './App.css';
import TopNav from './Components/TopNav';
import LeftNav from './Components/LeftNav';
import TimeLine from './Components/TimeLine';
import RightNav from './Components/RightNav';


function App() {
  // const [width, setWidth] = useState('')
  // useEffect(() => {
  //   const windowWidth = window.innerWidth
  //   setWidth(windowWidth)
  // }, [])

  return (
    <div className="app">
      {/* <h2>{width}</h2> */}
     <TopNav />
      <div className="app__body">
        <LeftNav />
        <TimeLine />
        <RightNav />
      </div>
    </div>
  );
}

export default App;
