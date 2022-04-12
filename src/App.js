import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Background/>
        <Routes>
        <Route path="/" element={<Home id="animationPageTransition"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
