import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import FlipBoxes from "../components/FlipBoxes";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import styles from "../home.module.css";
import { useMediaQuery } from "react-responsive";

const textAnimationVariant = {
  start: {
    y: 110,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};

const Home = ({ showSideMenu, setSideMenu }) => {
  // //////////for text animation when scroll////////////////////
  const animation = useAnimation();
  const textContainer = useRef(null);
  const isInView = useInView(textContainer);
  useEffect(() => {
    if (isInView) {
      animation.start({
        x: "50%",
        transition: {
          deley: 0.5,
          duration: 1,
          type: "spring",
          mass: 1.5,
        }
      });
    }
  }, [isInView]);
  /////////////for images animation when scroll//////////////////
  const imagesContainer = useRef(null);
  const imagesContainerIsInView = useInView(imagesContainer);
  const imagesAnimation = useAnimation();
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  useEffect(() => {
    if(imagesContainerIsInView) {
      imagesAnimation.start(isLargeScreen && (imagesContainerIsInView && ({
        opacity: 1,
        scale: 1
      })))
    } 
  },[imagesContainerIsInView]);

  return (
    <div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `${showSideMenu ? "-270px" : 0}` }}
        className="home-page-container"
      >
        {/* black shade box when active side menu */}
        <AnimatePresence>
          {showSideMenu && (
            <div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed z-30 top-0 left-0 h-screen w-[100%] bg-blackShade"
            ></div>
          )}
        </AnimatePresence>

        {/* hero section */}

        <div
          className={`h-screen p-[30px] relative overflow-hidden ${styles.background}`}
        >
          <div className="absolute z-10 left-[50%] top-[20%] md:top-[15%] lg:top-[13%] translate-x-[-50%] text-white">
            <p className="text-[50px] font-bold md:text-[80px] lg:text-[100px] font-black text-center mb-[-15px] md:mb-[-40px] lg:mb-[-55px] overflow-hidden">
              <motion.span
                className="inline-block"
                variants={textAnimationVariant}
                initial="start"
                animate="end"
                transition={{ delay: 0.5 }}
              >
                TASTE
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                variants={textAnimationVariant}
                initial="start"
                animate="end"
                transition={{ delay: 0.8 }}
              >
                THE
              </motion.span>
            </p>
            <p className="text-[50px] font-bold md:text-[80px] lg:text-[100px] font-black text-center overflow-hidden">
              <motion.span
                className="inline-block"
                variants={textAnimationVariant}
                initial="start"
                animate="end"
                transition={{ delay: 1.1 }}
              >
                DIFFERENCE
              </motion.span>
            </p>
          </div>

          <img
            className="w-[248px] md:w-[400px] lg:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0 select-none"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef_burgers_burger_and_sauce_768px-5.png"
          />
          <img
            className="w-[150px] md:w-[200px] absolute top-[50%] left-[-20%] md:left-[-8%] lg:w-[225px] lg:left-[-3%] z-[1] select-none"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/tomatos.png"
          />
          <img
            className="w-[150px] md:w-[200px] absolute top-[25%] right-[-20%] md:right-[-10%] lg:w-[225px] lg:right-[-9%] z-[1] select-none"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/onions.png"
          />
          <img
            className="md:w-[244px] hidden md:block absolute md:top-[60%] md:right-[15%] lg:w-[270px] lg:right-[20%] xl:right-[25%] z-[1] select-none"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/source.png"
          />

          <div className="absolute bottom-[120px] md:bottom-[50px] left-0 right-0 flex justify-between text-white p-[25px] md:p-[20px]">
            <div className="md:w-[500px]">
              <p className="text-2xl font-extrabold mb-[8px]">
                THE BEEF BURGER
              </p>
              <p className="font-medium text-[16px]">
                SMOKED BRISKET, TENDER RIBS, SMOKED SAUSAGE, BACON & CHEDDAR
                WITH LETTUCE, TOMATO, HOUSE BBQ & RANCH.
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-[24px] font-black tracking-[8px] mb-[-20px] text-center">
                SAUCE
              </p>
              <p
                className="text-[35px] font-black"
                style={{ fontFamily: "cursive" }}
              >
                Original
              </p>
            </div>
          </div>
        </div>

        {/* second container    */}
        <div className="bg-sCBGC py-[60px] md:px-[30px] px-[20px] lg:py-[80px] lg:px-[0px] xl:py-[100px] xl:px-[120px] md:px-[30px] overflow-hidden">
          {/* titles container */}
          <div className="flex">
            <div className="border-y-[3px] border-borderColorY mr-[20px] hidden md:block flex-1">
              <div className="py-[20px] ">
                <p className="font-black text-borderColorY text-center lg:text-[22px]">
                  DON’T NEED A SILVER FORK TO EAT A GOOD BURGER
                </p>
              </div>
            </div>

            <div className="border-y-[3px] border-orange-400 mr-[20px] flex-1">
              <div className="h-[80px] md:h-[93.33px] lg:h-[106px] flex items-center justify-center">
                <p className="font-black text-white text-[26px] lg:text-[40px] text-orange-400">
                  OUR BURGERS
                </p>
              </div>
            </div>

            <div className="border-y-[3px] border-borderColorY hidden md:block flex-1">
              <div className="py-[20px] ">
                <p className="font-black text-borderColorY text-center lg:text-[22px]">
                  BECAUSE WE NEVER PLAY WITH SOMEONE’S HEALTH
                </p>
              </div>
            </div>
          </div>

          {/* images container*/}
          <div
            className="flex flex-col md:flex-row md:mt-[90px] md:mb-[40px]"
            ref={imagesContainer}
          >
            <div className="flex-1 flex justify-center items-center mt-[80px] mb-[50px] md:m-0 md:mr-[20px]">
              <motion.img
                initial={isLargeScreen && {opacity: 0.2,scale: 0.3}}
                animate={imagesAnimation}
                transition={{duration: 0.4}}
                className="w-[272px] md:w-[100%] select-none"
                src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png"
              />
            </div>
            <div className="flex-1 flex justify-center items-center md:m-0 md:mr-[20px]">
              <motion.img
                initial={isLargeScreen && {opacity: 0.2,scale: 0.3}}
                animate={imagesAnimation}
                transition={{duration: 0.8}}
                className="w-[272px] md:w-[100%] select-none"
                src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"
              />
            </div>
            <div className="flex-1 flex justify-center iatems-center my-[40px] md:m-0">
              <motion.img
                initial={isLargeScreen && {opacity: 0.2,scale: 0.3}}
                animate={imagesAnimation}
                transition={{duration: 1.2}}
                className="w-[272px] md:w-[100%] md:h-[92%] select-none"
                src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/veggie-burger.png"
              />
            </div>
          </div>

          {/* about container */}
          <div className="flex flex-col md:flex-row md:mb-[80px]">
            <div className="flex-1 mb-[50px] md:mb-0 px-[5px]">
              <h2 className="uppercase font-extrabold text-[36px] lg:text-[50px] text-center leading-[1] text-white mb-[25px] mb-[25px] md:mb-[35px] select-none">
                fish
                <br />
                burger
              </h2>
              <p className="text-borderColorY text-center">
                LIFE IS LIKE A BURGER THE MORE YOU ADD TO IT, THE BETTER IT
                BECOMES
              </p>
            </div>

            <div className="flex-1 mb-[50px] md:mb-0 px-[5px]">
              <h2 className="uppercase font-extrabold text-[36px] lg:text-[50px] text-center leading-[1] text-white mb-[25px] md:mb-[35px] select-none">
                beef
                <br />
                burger
              </h2>
              <p className="text-borderColorY text-center">
                BURGER FOR THE BODY IS NOT ENOUGH THERE MUST BE A BURGER FOR THE
                SOUL
              </p>
            </div>

            <div className="flex-1 px-[5px]  mb-[90px] md:mb-0">
              <h2 className="uppercase font-extrabold text-[36px] lg:text-[50px] text-center leading-[1] text-white mb-[25px] md:mb-[35px] select-none">
                veggie
                <br />
                burger
              </h2>
              <p className="text-borderColorY text-center">
                ROSES ARE RED, VIOLETS ARE BLUE. THE BURGER COSTS LESS THAN
                DINNER FOR TWO
              </p>
            </div>
          </div>

          {/* have it text*/}
          <p
            className={`text-[20px] text-white font-extrabold text-center mb-[40px] md:mb-[60px] ${styles.sideLines}`}
          >
            HAVE IT YOUR WAY
          </p>
          <FlipBoxes/>
        </div>





        <div
          ref={textContainer}
          className="h-screen bg-sky-700 p-[30px] overflow-hidden"
        >
          <motion.h1
            className="text-3xl uppercase font-bold"
            animate={animation}
          >
            hello
          </motion.h1>
        </div>
        <div className="h-screen bg-rose-500 p-[30px] overflow-hidden"></div>
      </motion.div>
    </div>
  );
};
export default Home;
