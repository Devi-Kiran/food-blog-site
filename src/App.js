import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import { IoMdMenu } from "react-icons/io";
import {BsYelp} from "react-icons/bs";
import {FaTripadvisor} from "react-icons/fa"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const logoHoverVariant = {
  hover: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};

function App() {
  return (
    <div className="App">

      <header className="py-[20px] md:py-[30px] md:px-[40px] lg:py-[20px] lg:px-[60px]">
        <div className="flex text-white font-black uppercase">
          <div className="hidden lg:flex items-center flex-1">
            <Link className="mr-3 p-1.5" to="/">home</Link>
            <Link className="mx-3 p-1.5"  to='/our-menus'>our menus</Link>
            <Link className="mx-3 p-1.5"  to="/about">about</Link>
          </div>
          <div
            className="flex-1 flex lg:justify-center"
          >
            <Link to="/">
              <motion.img
                className="sm:w-[100%] md:w-[240px] lg:w-[300px] ml-[10px] md:m-0"
                variants={logoHoverVariant}
                whileHover="hover"
                src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/logo-white.png"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Link className="mr-3 p-1.5 hidden lg:block" to="/">order online</Link>
            <Link className="mr-3 p-1.5 hidden lg:block" to="/">find us</Link>
            <a className="mr-3 p-1.5 text-[20px] hidden md:block" target="_blank" href="https://www.facebook.com/"><BsYelp/></a>
            <a className="mr-3 p-1.5 text-2xl hidden md:block" target="_blank" href="https://www.tripadvisor.com/"><FaTripadvisor/></a>
            <span className="block text-2xl mr-[10px] md:m-0 lg:hidden">
              <IoMdMenu />
            </span>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;