import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Floor from './Components/Floor/Floor';
// import Background2 from './Components/Background2/Background2';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Background/> */}
        {/* <Background2/> */}
        {/* <Floor/> */}
        <Routes>
        <Route path="/" element={<Home id="animationPageTransition"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
