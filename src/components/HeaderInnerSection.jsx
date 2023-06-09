import React,{useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import {BsYelp} from "react-icons/bs";
import {FaTripadvisor} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function HeaderInnerSection({setSideMenu}) {
  return (
    <div className="flex text-white font-black uppercase">
        <div className="hidden lg:flex items-center flex-1">
          <Link className="mr-3 p-1.5 hover:text-black duration-300" to="/">
            home
          </Link>
          <Link className="mx-3 p-1.5 hover:text-black duration-300" to="/our-menus">
            our menus
          </Link>
          <Link className="mx-3 p-1.5 hover:text-black duration-300" to="/about">
            about
          </Link>
        </div>
        <div className="flex-1 flex lg:justify-center">
          <Link to="/">
            <motion.img
              className="sm:w-[100%] md:w-[240px] lg:w-[300px] ml-[10px] md:m-0"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/logo-white.png"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <Link className="mr-3 p-1.5 hidden lg:block hover:text-black duration-300" to="/order-online">
            order online
          </Link>
          <Link className="mr-3 p-1.5 hidden lg:block hover:text-black duration-300" to="/find-us">
            find us
          </Link>
          <a
            className="mr-3 p-1.5 text-[20px] hidden md:block hover:text-black duration-300"
            target="_blank"
            href="https://www.facebook.com/"
          >
            <BsYelp />
          </a>
          <a
            className="mr-3 p-1.5 text-2xl hidden md:block hover:text-black"
            target="_blank"
            href="https://www.tripadvisor.com/"
          >
            <FaTripadvisor />
          </a>
          <span  onClick={() => setSideMenu(true)} className="block text-2xl mr-[10px] md:m-0 lg:hidden hover:text-black duration-300">
            <IoMdMenu />
          </span>
        </div>
      </div>
  )
}

export default HeaderInnerSection