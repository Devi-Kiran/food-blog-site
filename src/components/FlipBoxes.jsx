import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const FlipBoxes = () => {
  ///////////for image animation//////////////
  const imageContainer = useRef(null);
  const imageContainerIsInView = useInView(imageContainer);
  const imageAnimation = useAnimation();
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isExtraLargeScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  useEffect(() => {
    imageAnimation.start(
      imageContainerIsInView &&
        isLargeScreen && {
          rotateX: 0,
        }
    );
  }, [imageContainerIsInView]);
  ///////////for content container animation//////////////
  const contentContainer = useRef(null);
  const contentContainerIsInView = useInView(contentContainer);
  const contentContainerAnimation = useAnimation();

  useEffect(() => {
    contentContainerAnimation.start(
      contentContainerIsInView &&
        isLargeScreen && {
          rotateX: 0,
        }
    );
  }, [contentContainerIsInView]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div ref={imageContainer} className="flex-auto lg:w-[130%]">
          <motion.img
            initial={isLargeScreen && { rotateX: 90 }}
            animate={imageAnimation}
            transition={{ delay: `${isExtraLargeScreen ? 0.5 : 1}`, duration: 0.5, ease: "easeOut" }}
            className="mx-auto"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/delicious-burger-P8VTY5Y-683x1024.jpg"
          />
        </div>
        <div
          ref={contentContainer}
          className="flex flex-col md:flex-row flex-2"
        >
          <motion.div
            initial={isLargeScreen && { rotateX: 90 }}
            animate={contentContainerAnimation}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            className="bg-white py-[60px] px-[40px] md:p-[60px] text text-zinc-900 md:w-2/4"
          >
            <h3 className="leading-[1] mb-[40px]">
              <span className="text-[36px] font-extrabold underline">OUR</span>
              <br />
              <span className="text-[45px] font-extrabold">MENUS</span>
            </h3>
            <p className="leading-[1.6] mb-[50px]">
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste
              natus error sit. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium.
            </p>
            <Link to="/our-menus">
              <button className="py-[10px] px-[20px] bg-orange-400 rounded-md text-white font-bold">
                VIEW MENUS
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={isLargeScreen && { rotateX: 90 }}
            animate={contentContainerAnimation}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
            className="bg-slate-100 py-[60px] px-[40px] md:p-[60px] text text-zinc-900 md:w-2/4"
          >
            <h3 className="leading-[1] mb-[40px]">
              <span className="text-[36px] font-extrabold underline">
                ORDER
              </span>
              <br />
              <span className="text-[45px] font-extrabold">DELEVERY</span>
            </h3>
            <p className="leading-[1.6] mb-[50px]">
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste
              natus error sit. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium.
            </p>
            <Link to="/order-online">
              <button className="py-[10px] px-[20px] bg-black rounded-md text-white font-bold">
                ORDER ONLINE
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FlipBoxes;
