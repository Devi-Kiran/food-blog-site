import React from "react";
import { motion } from "framer-motion";
import FlipBoxes from "../components/FlipBoxes";
import FooterSection from "../components/FooterSection";
import ExtraInformationSection from "../components/ExtraInpormationSection";

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

const OurMenus = () => {
  return (
    <div>
      <div className="bg-sCBGC px-[20px] md:px-[30px] pt-[100px] pb-[50px] lg:pt-[160px] lg:px-[0px] xl:px-[120px] text-center">
        <p className="py-[50px] border-y-8 border-orange-400 text-[50px] md:text-[60px] font-bold text-white lg:text-[70px] overflow-hidden mb-[60px]">
          <motion.span
            className="inline-block"
            variants={titleAnimationVarient}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ABOUT
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            variants={titleAnimationVarient}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            US
          </motion.span>
        </p>
        
        <p className="w-[75%] sm:w-[50%] text-center mx-auto text-orange-400 mb-[60px] leading-[1.8]">
            SMOKED BRISKET, TENDER RIBS, SMOKED SAUSAGE, BACON & CHEDDAR WITH LETTUCE, TOMATO, HOUSE BBQ & RANCH.
        </p>

        <div className="">
            <div className="flex flex-col md:flex-row md:justify-between pb-[40px] px-[30px] md:px-[0px] mb-[50px] md:mb-0">
                <div className="md:w-[20%] mb-[40px] md:mb-0">
                    <img className="w-full" src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"/>
                </div>
                <div className="md:w-[60%] text-center md:text-left md:px-[100px] mb-[10px] md:mb-0">
                    <h4 className="font-extrabold text-white text-[32px] mb-[10px] md:text-[30px] lg:text-[40px]">BEEF BURGER</h4>
                    <p className="leading-[1.8] text-slate-400">
                        BURGER FOR THE BODY IS NOT ENOUGH THERE MUST BE A BURGER FOR THE SOUL
                    </p>
                </div>
                <div className="md:w-[20%]">
                    <span className="text-orange-400 text-[26px] font-bold">RS/-149</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between pb-[40px] px-[30px] md:px-[0px] mb-[50px] md:mb-0">
                <div className="md:w-[20%] mb-[40px] md:mb-0">
                    <img className="w-full ml-[12px]" src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png"/>
                </div>
                <div className="md:w-[60%] text-center md:text-left md:px-[100px] mb-[10px] md:mb-0">
                    <h4 className="font-extrabold text-white text-[32px] mb-[10px] md:text-[30px] lg:text-[40px]">FISH BURGER</h4>
                    <p className="leading-[1.8] text-slate-400">
                        BURGER FOR THE BODY IS NOT ENOUGH THERE MUST BE A BURGER FOR THE SOUL
                    </p>
                </div>
                <div className="md:w-[20%]">
                    <span className="text-orange-400 text-[26px] font-bold">RS/-119</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between pb-[40px] px-[30px] md:px-[0px]">
                <div className="md:w-[20%] mb-[40px] md:mb-0">
                    <img className="w-full" src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/veggie-burger.png"/>
                </div>
                <div className="md:w-[60%] text-center md:text-left md:px-[100px] mb-[10px] md:mb-0">
                    <h4 className="font-extrabold text-white text-[32px] mb-[10px] md:text-[30px] lg:text-[40px]">VEGGIE BURGER</h4>
                    <p className="leading-[1.8] text-slate-400">
                        ROSES ARE RED, VIOLETS ARE BLUE. THE BURGER COSTS LESS THAN DINNER FOR TWO
                    </p>
                </div>
                <div className="md:w-[20%]">
                    <span className="text-orange-400 text-[26px] font-bold">RS/-99</span>
                </div>
            </div>
        </div>
      </div>
      <div className="pb-[60px] lg:pb-[100px] bg-sCBGC">
      <FlipBoxes/>
      </div>
      <ExtraInformationSection/>
      <FooterSection/>
    </div>
  );
};

export default OurMenus;
