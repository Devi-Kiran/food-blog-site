import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import HeaderInnerSection from "./HeaderInnerSection";

const headerAnimationVarient = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const Header = ({ setSideMenu, backgroundColor }) => {
  const header = useRef(null);
  const headerIsInView = useInView(header);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setShowHeader(!headerIsInView);
  }, [headerIsInView]);

  return (
    <>
      <header
        ref={header}
        className="py-[20px] md:py-[30px] md:px-[40px] lg:py-[20px] absolute z-10 top-0 left-0 right-0 lg:px-[20px] xl:px-[120px] trasparent select-none"
      >
        <HeaderInnerSection setSideMenu={setSideMenu} />
      </header>

      <AnimatePresence>
        {showHeader && (
          <motion.header
            ref={header}
            variants={headerAnimationVarient}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-[20px] md:py-[30px] md:px-[40px] lg:py-[20px] fixed z-10 top-0 left-0 right-0 lg:px-[20px] xl:px-[120px] bg-sCBGC select-none"
          >
            <HeaderInnerSection setSideMenu={setSideMenu} />
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
