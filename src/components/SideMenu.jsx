import React from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

import { motion, AnimatePresence } from "framer-motion";

const sideMenuVariant = {
  hidden: {
    x: "300px",
  },

  show: {
    x: "0",
    transition: {
      type: "twice",
    },
  },
};

const SideMenu = ({ showSideMenu, setSideMenu }) => {
  return (
    <AnimatePresence>
      {showSideMenu && (
      <motion.div
        variants={sideMenuVariant}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="bg-sideMenuBackgroundColor w-[270px] h-screen fixed right-0 z-20 p-[35px]"
      >
        <div className="flex justify-end">
          <CgClose
            onClick={() => setSideMenu(false)}
            className="text-white text-[30px] hover:text-amber-500"
          />
        </div>
        <Link
          className="text-[24px] font-black text-white block my-[8px] hover:text-amber-500"
          to="/"
        >
          HOME
        </Link>
        <Link
          className="text-[24px] font-black text-white block my-[8px] hover:text-amber-500"
          to="/our-menus"
        >
          OUR MENUS
        </Link>
        <Link
          className="text-[24px] font-black text-white block my-[8px] hover:text-amber-500"
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="text-[24px] font-black text-white block my-[8px] hover:text-amber-500"
          to="/order-online"
        >
          ORDER ONLINE
        </Link>
        <Link
          className="text-[24px] font-black text-white block my-[8px] hover:text-amber-500"
          to="/find-us"
        >
          FIND US
        </Link>
      </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SideMenu;