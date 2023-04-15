import React, { useRef, useEffect } from "react";
import { Parallax } from "react-parallax";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "../home.module.css";
import ExtraInformationSection from "../components/ExtraInpormationSection";
import FooterSection from "../components/FooterSection";
import BurgerLarge from "../images/pexels-daniel-reche-3616956.jpg";
import BurgerSmall from "../images/pexels-optical-chemist-15756902.jpg";
import { useMediaQuery } from "react-responsive";

const titleAnimationVarient = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const AboutPage = () => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const textContainer = useRef(null);
  const textContainerIsInView = useInView(textContainer);
  const textAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    if (textContainerIsInView) {
      imageAnimation.start(
        isLargeScreen && {
          scale: 1,
          opacity: 1,
        }
      );
      textAnimation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [textContainerIsInView]);

  return (
    <div>
      <Parallax
        strength={300}
        bgImage={`${!isSmallScreen ? BurgerSmall : BurgerSmall}`}
      >
        <div className="h-[400px] md:h-[95vh] flex justify-center items-center">
          <div>
            <p className="text-[50px] md:text-[60px] font-bold text-white lg:text-[70px] overflow-hidden">
              <motion.span
                className="inline-block"
                variants={titleAnimationVarient}
                initial="hidden"
                animate="show"
                transition={{duration: 0.5,delay: 0.5}}
              >
                ABOUT
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                variants={titleAnimationVarient}
                initial="hidden"
                animate="show"
                transition={{duration: 0.5,delay: 0.7}}
              >
                US
              </motion.span>
            </p>
          </div>
        </div>
      </Parallax>
      <div className="bg-sCBGC">
        <p
          className={`pt-[60px] md:pt-[80px] md:pb-[60px]  text-[20px] text-orange-400 font-extrabold text-center mb-[30px] md:mb-[0px] ${styles.sideLines}`}
        >
          HAVE IT YOUR WAY
        </p>

        <div className="flex flex-col md:flex-row md:px-[30px] pb-[50px] md:pb-[80px]">
          <div
            ref={textContainer}
            className="text-center flex-1 mb-[50px] md:mb-0"
          >
            <p className="text-[55px] lg:text-[75px] font-extrabold text-orange-400 mb-[-35px] md:mb-[-25px] lg:mb-[-50px] overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={textAnimation}
                transition={{ duration: 0.5, ease: "linear", delay: 0.5 }}
              >
                ORIGINAL
              </motion.span>
            </p>
            <p className="text-[100px] md:text-[60px] lg:text-[150px] font-extrabold text-white mb-[-35px] lg:mb-[-60px] overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={textAnimation}
                transition={{ duration: 0.5, ease: "linear", delay: 0.7 }}
              >
                FISH
              </motion.span>
            </p>
            <p className="text-[60px] md:text-[60px] lg:text-[85px] font-extrabold text-white overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={textAnimation}
                transition={{ duration: 0.5, ease: "linear", delay: 0.9 }}
              >
                BURGER
              </motion.span>
            </p>
          </div>
          <div
            className="bg-center bg-contain bg-no-repeat px-[10px] py-[30px] flex-1"
            style={{
              backgroundImage:
                "url('https://themes.themegoods.com/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/brush-bg-1.png')",
            }}
          >
            <motion.img
              initial={isLargeScreen && { scale: 0.3, opacity: 0 }}
              animate={imageAnimation}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-[314px] mx-auto md:w-full"
              src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png"
            />
          </div>
        </div>
      </div>
      <ExtraInformationSection />
      <FooterSection />
    </div>
  );
};

export default AboutPage;