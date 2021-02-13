import './App.css';
import TopNav from './Components/TopNav';
import LeftNav from './Components/LeftNav';
import TimeLine from './Components/TimeLine';
import RightNav from './Components/RightNav';



function App() {
  return (
    <div className="app">
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
