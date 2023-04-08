import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import {useEffect,useRef,useState} from "react";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [showSideMenu,setSideMenu] = useState(false);
  
  return (
    <div className="App">
      <Header setSideMenu={setSideMenu} backgroundColor="bg-transparent"/>
      <SideMenu showSideMenu={showSideMenu} setSideMenu={setSideMenu}/>

      <Routes>
        <Route path="/" element={<Home showSideMenu={showSideMenu} setSideMenu={setSideMenu}/>} />
      </Routes>
    </div>
  );
}

export default App;