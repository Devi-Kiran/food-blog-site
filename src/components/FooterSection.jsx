import React from "react";
import styles from "../home.module.css"

const FooterSection = () => {
  return (
    <div>
      <div className="bg-sCBGC py-[60px] px-[20px] lg:py-[80px] lg:px-0">
        <p
          className={`text-[20px] text-orange-400 font-extrabold text-center mb-[40px] md:mb-[60px] ${styles.sideLines}`}
        >
          HAVE IT YOUR WAY
        </p>
        <div className="flex flex-col items-center">
            <p className="text-[20px] text-white text-center mb-[25px] md:mb-[40px] w-[60%] md:w-auto">
                Subscribe now to receive fresh deals & offers by email.
            </p>
            <div className="flex flex-col md:flex-row items-center md:justify-center">
                <input className="py-[10px] px-[15px] rounded-md mb-[10px] md:mb-0 md:mr-[10px]" placeholder="Email" />
                <button className="py-[10px] px-[15px] rounded-md text-white bg-orange-400 font-extrabold">SIGN UP</button>
            </div>
        </div>
      </div>

      <div className="bg-white pt-[60px] pb-[35px] md:pt-[80px] md:pb-[45px] text-center">
        <img
            className="w-[240px] md:w-[320px] lg:w-[300px] mx-auto mb-[20px] md:mb-[40px] lg:md-[60px]"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/logo-dark.png"
        />
        <div className="flex flex-col md:flex-row mb-[60px] md:justify-center">
            <div className="md:text-left mb-[25px] md:mb-0 md:pr-[50px] md:w-[476px]">
                <p className="mb-[20px]">
                    732/21 Second Street, Manchester King Street, Kingston United Kingdom
                </p>
                <p className="font-extrabold">T: +65 (0) 76-890-214</p>
                <p className="font-extrabold">E: bookings@wilma.co.uk</p>
            </div>
            <div className="md:text-left">
                <p className="py-[3px]">Twitter</p>
                <p className="py-[3px]">Facebook</p>
                <p className="py-[3px]">Instagram</p>
                <p className="py-[3px]">Yelp</p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-[10px]">
            <p className="mb-[10px] md:pt-[10px]">© COPYRIGHT THEMEGOODS ALL RIGHT RESERVED.</p>
            <span className="text-[30px] font-extrabold" style={{fontFamily: "cursive"}}>Original</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;