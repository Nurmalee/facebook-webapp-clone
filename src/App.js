import './App.css';
import TopNav from './Components/TopNav';
import LeftNav from './Components/LeftNav';
import TimeLine from './Components/TimeLine';



function App() {
  return (
    <div className="app">
     <TopNav />
      <div className="app__body">
        <LeftNav />
        <TimeLine />
      </div>
    </div>
  );
}

export default App;
