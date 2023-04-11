import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ExtraInformationSection = () => {
  const presetBox = useRef(null);
  const presentBoxIsInView = useInView(presetBox);
  const titleAnimation = useAnimation();
  const opacityAnimation = useAnimation();
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (presentBoxIsInView && isLargeScreen) {
      opacityAnimation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [presentBoxIsInView]);

  useEffect(() => {
    if(presentBoxIsInView) {
        titleAnimation.start({
            y: 0,
            opacity: 1,
          })
    }
  },[presentBoxIsInView])

  const alwaysBox = useRef(null);
  const alwaysBoxIsInView = useInView(alwaysBox);
  const titleAnimation2 = useAnimation();
  const opacityAnimation2 = useAnimation();
  useEffect(() => {
    if (alwaysBoxIsInView && isLargeScreen) {
      opacityAnimation2.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [alwaysBoxIsInView]);

  useEffect(() => {
    if(alwaysBoxIsInView) {
        titleAnimation2.start({
            y: 0,
            opacity: 1,
          })
    }
  },[alwaysBoxIsInView])

  
  return (
    <div>
      <div className="grid grid-cols-12">
        <div
          className="h-[500px] md:h-[797px] lg:h-[925px] bg-black col-span-12 md:col-span-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://themes.themegoods.com/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/tomato-sauce-PNZ86VD.jpg')",
          }}
        ></div>
        <div className="h-auto md:h-[797px] lg:h-[925px] bg-white col-span-12 md:col-span-6 py-[60px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[140px] lg:px-[80px]">
          <div
            className="text-center"
            ref={presetBox}
          >
            <h4 className="mb-[30px] text-[18px] md:text-[22px] lg:text-[30px] font-extrabold">
              PRESENT
            </h4>
            <p className="text-[45px] md:text-[55px] lg:text-[75px] font-bold text-center mb-[-20px] md:mb-[-25px] lg:mb-[-35px] overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{y: 110,opacity: 0,}}
                animate={titleAnimation}
                transition={{delay: 0.5,duration: 0.5}}
              >
                TOMATO
              </motion.span>
            </p>
            <p className="text-[45px] md:text-[55px] lg:text-[75px] font-bold text-center overflow-hidden mb-[-25px] md:mb-[-30px] lg:mb-[-50px]">
              <motion.span
                className="inline-block"
                initial={{y: 110,opacity: 0,}}
                animate={titleAnimation}
                transition={{delay: 0.9,duration: 0.5}}
              >
                ORIGINAL
              </motion.span>
            </p>
            <motion.h4
              initial={isLargeScreen && { opacity: 0, y: "15px" }}
              animate={opacityAnimation}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="text-[36px] font-bold text-pink md:text-[50px] lg:text-[75px] mb-[15px]"
              style={{ fontFamily: "cursive" }}
            >
              Sause
            </motion.h4>
            <motion.p
              initial={isLargeScreen && { opacity: 0, y: "15px" }}
              animate={opacityAnimation}
              transition={{ delay: 1.7, duration: 0.4 }}
              className="font-bold text-[20px] mb-[30px]"
            >
              OUR SIGNATURE HANDMADE BEEF PATTY
            </motion.p>
            <motion.p
              initial={isLargeScreen && { opacity: 0, y: "15px" }}
              animate={opacityAnimation}
              transition={{ delay: 2.1, duration: 0.4 }}
              className="leading-[1.8] mb-[50px]"
            >
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste
              natus error sit. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium.
            </motion.p>
            <Link to="/view-menus">
              <motion.button
                initial={isLargeScreen && { opacity: 0, y: "15px" }}
                animate={opacityAnimation}
                transition={{ delay: 2.5, duration: 0.4 }}
                className="py-[10px] px-[20px] bg-pink rounded-md text-white font-bold"
              >
                VIEW MENUS
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="bg-sCBGC h-[500px] md:h-[797px] lg:h-[925px] bg-lime-500 col-span-12 md:col-span-6 py-[60px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[140px] lg:px-[80px]">
        <div
            className="text-center"
            ref={alwaysBox}
          >
            <h4 className="mb-[30px] text-white text-[18px] md:text-[22px] lg:text-[30px] font-extrabold">
              ALWAYS
            </h4>
            <p className="text-[45px] md:text-[55px] lg:text-[75px] font-bold text-center mb-[-20px] md:mb-[-25px] lg:mb-[-35px] overflow-hidden">
              <motion.span
                className="inline-block text-green"
                initial={{y: 110,opacity: 0,}}
                animate={titleAnimation2}
                transition={{delay: 0.5,duration: 0.5}}
              >
                TOMATO
              </motion.span>
            </p>
            <p className="text-[45px] md:text-[55px] lg:text-[75px] font-bold text-center overflow-hidden mb-[-25px] md:mb-[-30px] lg:mb-[-50px]">
              <motion.span
                className="inline-block text-white"
                initial={{y: 110,opacity: 0,}}
                animate={titleAnimation2}
                transition={{delay: 0.9,duration: 0.5}}
              >
                ORIGINAL
              </motion.span>
            </p>
            <motion.h4
              initial={isLargeScreen && { opacity: 0, y: "15px" }}
              animate={opacityAnimation2}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="text-[36px] text-sCBGC font-bold text-pink md:text-[50px] lg:text-[75px] mb-[15px]"
              style={{ fontFamily: "cursive" }}
            >
              Sause
            </motion.h4>
            <motion.p
              initial={isLargeScreen && { opacity: 0, y: "15px" }}
              animate={opacityAnimation2}
              transition={{ delay: 1.7, duration: 0.4 }}
              className="text-white font-bold text-[20px] mb-[30px]"
            >
              OUR SIGNATURE HANDMADE BEEF PATTY
            </motion.p>
            <motion.p
              initial={isLargeScreen && { opacity: 0, y: "15px" }}
              animate={opacityAnimation2}
              transition={{ delay: 2.1, duration: 0.4 }}
              className="text-white leading-[1.8] mb-[50px]"
            >
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste
              natus error sit. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium.
            </motion.p>
            <Link to="/view-menus">
              <motion.button
                initial={isLargeScreen && { opacity: 0, y: "15px" }}
                animate={opacityAnimation2}
                transition={{ delay: 2.5, duration: 0.4 }}
                className="py-[10px] px-[20px] bg-green rounded-md text-white font-bold"
              >
                VIEW MENUS
              </motion.button>
            </Link>
          </div>
        </div>
        <div
          className="h-[500px] md:h-[797px] lg:h-[925px] col-span-12 md:col-span-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://themes.themegoods.com/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/salad-with-fish-fresh-vegetable-salad-with-salmon-JTZV4UK.jpg')",
          }}
        ></div>
        <div className="h-screen bg-pink col-span-12 flex flex-col justify-between overflow-hidden">
          <h3 className="leading-[1] mb-[40px] mt-[100px] text-white text-center">
            <span className="text-[50px] md:text-[60px] lg:text-[80px] font-extrabold underline">
              THE
            </span>{" "}
            <span className="text-[50px] md:text-[60px] lg:text-[80px] font-extrabold">
              SUPER SUNDAY
            </span>
          </h3>
          <img
            className="w-full"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/ice-cream.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraInformationSection;
