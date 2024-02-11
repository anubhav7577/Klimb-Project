import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
        <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/uploaded" element={<Landing/>}/>
        </Routes>
        </div>
  );
}

export default App;
