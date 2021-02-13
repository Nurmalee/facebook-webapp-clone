import './App.css';
import TopNav from './Components/TopNav';
import LeftNav from './Components/LeftNav';



function App() {
  return (
    <div className="app">
     <TopNav />
      <div className="app__body">
        <LeftNav />
      </div>
    </div>
  );
}

export default App;
