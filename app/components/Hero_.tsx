"use client";

import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faCertificate,
  faComments,
  faQrcode,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Stage_ from "./Stage_";

const Hero_ = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center`}
    >
      <LayerTwo_ isLoaded={isLoaded} />
      <LayerOne_ />
    </div>
  );
};

export default Hero_;

// // // // // // // // // Aux // // // // // // // // //

const LayerOne_ = () => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-start items-center`}
    >
      <div
        className={`w-full min-h-[80px] flex flex-row justify-center items-center px-4 z-[1]`}
      >
        <img
          className={`object-cover h-[60px] mr-5`}
          src={`https://autopanache.co.za/wp-content/uploads/2024/03/autoPanache_logo-1.png`}
        />
        <div
          className={`w-[50px] h-[50px] bg-[#f8f9fd]/60 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center mr-1`}
        >
          <FontAwesomeIcon icon={faQrcode} className={``} />
        </div>
        <div
          className={`w-[50px] h-[50px] bg-[#f8f9fd]/60 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center`}
        >
          <FontAwesomeIcon icon={faSearch} className={``} />
        </div>
        <div
          className={`min-w-[50px] min-h-[50px] mt-2 flex flex-row justify-center items-center ml-4 mr-6`}
        >
          {[
            "Models",
            "Services",
            "Experience",
            "Shop",
            "Purchase",
            "Customize",
          ].map((obj_, index_) => (
            <div
              className={`w-[120px] h-[45px] rounded-[40px] ${
                index_ == 0
                  ? "bg-black hover:bg-gray-700"
                  : "bg-[#f8f9fd]/60 hover:bg-gray-200 border-solid border-[1px] border-gray-200"
              } cursor-pointer transition-all duration-200  flex flex-col justify-center items-center ml-2`}
              key={index_}
            >
              <p
                className={`${
                  index_ == 0 ? "text-white" : "text-black"
                } text-[14px] font-normal fira-sans-regular`}
              >
                {obj_}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`w-[50px] h-[50px] bg-[#f8f9fd]/60 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center mr-1`}
        >
          <FontAwesomeIcon icon={faComments} className={`scale-[0.9]`} />
        </div>
        <div
          className={`w-[50px] h-[50px] bg-[#f8f9fd]/60 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center`}
        >
          <FontAwesomeIcon icon={faBars} className={`scale-[0.9]`} />
        </div>
      </div>
      <div
        className={`w-full min-h-[70px] mt-[56px] relative flex flex-row justify-start items-center`}
      >
        {/* <div
          className={`w-[1250px] h-[70px] flex flex-row justify-start items-center`}
        > */}
        <div
          className={`min-w-[50px] h-[70px] flex flex-col justify-center items-start`}
        >
          <p className={`text-[37px] font-medium fira-sans-semibold mb-[-2px]`}>
            Mclaren
          </p>
          <p
            className={`text-[15px] font-normal fira-sans-semibold text-[#f8f9fd]/400 opacity-40`}
          >
            600 LT Spider - 2020
          </p>
          <div
            className={`min-w-[50px] min-h-[50px] flex flex-col justify-center items-start absolute top-[133px]`}
          >
            {["Performance", "Design", "Safety", "Luxury", "Multimedia"].map(
              (obj_, index_) => (
                <div
                  className={`w-[120px] h-[46px] rounded-[40px] ${
                    index_ == 1
                      ? "bg-black hover:bg-gray-700"
                      : "bg-[#f8f9fd]/60 hover:bg-gray-200 border-solid border-[1px] border-gray-200"
                  } cursor-pointer transition-all duration-200  flex flex-col justify-center items-center mb-[10px]`}
                  key={index_}
                >
                  <p
                    className={`${
                      index_ == 1 ? "text-white" : "text-black"
                    } text-[14px] font-normal fira-sans-regular`}
                  >
                    {obj_}
                  </p>
                </div>
              )
            )}
            <div
              className={`w-[1250px] min-h-2 pt-[35px] pl-[64px] flex flex-row z-[2]`}
            >
              <p
                className={`text-[21px] font-bold fira-sans-semibold mb-[-2px] min-w-2`}
              >
                Featured This Month
              </p>
              <div
                className={`w-[48px] h-[48px] bg-[#f8f9fd]/60 relative left-[15px] bottom-2 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] flex flex-col justify-center items-center`}
              >
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={`scale-[0.9]`}
                />
              </div>
              <div
                className={`ml-auto flex flex-row justify-center items-center min-w-2 pr-5`}
              >
                <p className={`text-[21px] font-[400] fira-sans-regular`}>
                  Vehicle Wraps
                </p>
                <div className={`flex flex-row justify-center items-center`}>
                  {[
                    "bg-gray-300",
                    "bg-red-600",
                    "bg-blue-600",
                    "bg-orange-300",
                    "bg-black",
                  ].map((obj_, index_) => (
                    <Wrap_ obj_={obj_} index_={index_} key={index_} />
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`w-[1250px] min-h-2 pt-[10px] pl-[0px] flex flex-row`}
            >
              <div
                className={`w-[48px] min-h-[48px] relative top-[18px] transition-all duration-200 flex flex-col justify-center items-center`}
              >
                <div
                  className={`w-[48px] h-[48px] bg-[#f8f9fd]/60 relative hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] flex flex-col justify-center items-center`}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`scale-[0.9] opacity-30`}
                  />
                </div>
                <div
                  className={`w-[48px] h-[48px] bg-[#f8f9fd]/60 relative top-1 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] flex flex-col justify-center items-center`}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={`scale-[0.9] opacity-60`}
                  />
                </div>
              </div>
              <div
                className={`min-w-[275px] h-[145px] ml-6 transition-all duration-200  flex flex-row justify-start items-center mb-[10px]`}
              >
                {[
            "min-w-[275px]",
            "min-w-[216px]",
            "min-w-[217px]",
            "min-w-[196px]",
            "min-w-[275px]",
          ].map((obj_, index_) => (
            <div
                  className={`${obj_} h-[145px] mr-3 rounded-[25px] bg-[#f8f9fd]/60 hover:bg-gray-200 border-solid border-[1px] border-gray-200 cursor-pointer transition-all duration-200  flex flex-col justify-center items-center`}
                  key={index_}
                ></div>
          ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`min-w-2 min-h-[50px] absolute top-0 left-[280px] transition-all duration-200 flex flex-col justify-start items-start`}
        >
          <div
            className={`w-[48px] h-[48px] bg-[#f8f9fd]/60 relative top-[1px] hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] flex flex-col justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={`scale-[0.9]`}
            />
          </div>
          <div
            className={`w-[233px] min-h-[94px] bg-[#f8f9fd]/60 relative top-[21px] hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[28px] flex flex-col justify-center items-center p-4`}
          >
            <div className={`w-full h-full text-[12px] text-black/50`}>
              A variety of warranty options are available for your new or
              Certified Pre-Owned (CPO) Mercedes Benz
            </div>
          </div>
        </div>
        {/* </div> */}
        <div
          className={`min-w-2 min-h-[25px] absolute top-[4px] right-[18px] transition-all duration-200 flex flex-col justify-start items-start bg-black rounded-t-[28px]`}
        >
          <div
            className={`w-[45px] h-[45px] bg-white/20 relative top-[10px] left-[15px] mb-[-8px] transition-all duration-200 rounded-[50%] flex flex-col justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faCertificate}
              className={`scale-[0.9] text-white/80`}
            />
          </div>
          <p
            className={`text-[13px] text-white absolute top-[23px] right-[40px]`}
          >
            Unsurpassed Power
          </p>
          <div
            className={`w-[233px] min-h-[94px] bg-[#fbfbfe] relative top-[30px] hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[28px] flex flex-col justify-center items-center p-4`}
          >
            <div className={`w-full h-full text-[12px] text-black/50`}>
              A variety of warranty options are available for your new or
              Certified Pre-Owned (CPO) Mercedes Benz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Wrap_Props {
  index_: number;
  obj_: string;
}

const Wrap_ = ({ index_, obj_ }: Wrap_Props) => {
  const [hover_, setHover_] = useState(false);
  return (
    <div
      className={`${
        index_ == 3 ? "w-[25px] h-[25px]" : "w-[27px] h-[27px]"
      } rounded-[50%] cursor-pointer transition-all duration-200 flex flex-col justify-center items-center ml-[10px] ${obj_}`}
      onMouseEnter={() => {
        setHover_(true);
      }}
      onMouseLeave={() => {
        setHover_(false);
      }}
      key={index_}
    >
      <div
        className={`max-w-[27px] max-h-[27px] absolute rounded-[50%] cursor-pointer transition-all duration-200 ${
          index_ == 3 || hover_ ? "opacity-100" : "opacity-0 hover:opacity-100"
        } flex  flex-col justify-center items-center border-[2px] border-solid border-gray-100/80 scale-[1.2]`}
      />
    </div>
  );
};

// @ts-expect-error - no type
const LayerTwo_ = ({ isLoaded }) => {
    return (
      <div className={`w-full min-h-screen flex flex-col justify-center items-center absolute top-0 overflow-hidden`}>
      <img src={`/assets/images/McLogo.png`} className={`scale-[.5] opacity-5 relative bottom-[180px] left-[150px]`} />
      {isLoaded && <div className={`absolute top-0 w-full h-full z-[1]`}>
      <Stage_ />
      </div>}
    </div>
    )
}