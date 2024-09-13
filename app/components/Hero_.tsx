"use client";

import {
  faBars,
  faComments,
  faQrcode,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero_ = () => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center`}
    >
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
        className={`w-full h-[80px] flex flex-row justify-center items-center px-4`}
      >
        <img
          className={`object-cover h-[60px] mr-5`}
          src={`https://autopanache.co.za/wp-content/uploads/2024/03/autoPanache_logo-1.png`}
        />
        <div
          className={`w-[50px] h-[50px] bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center mr-1`}
        >
          <FontAwesomeIcon icon={faQrcode} className={``} />
        </div>
        <div
          className={`w-[50px] h-[50px] bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center`}
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
                  : "bg-gray-50 hover:bg-gray-200 border-solid border-[1px] border-gray-200"
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
          className={`w-[50px] h-[50px] bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center mr-1`}
        >
          <FontAwesomeIcon icon={faComments} className={`scale-[0.9]`} />
        </div>
        <div
          className={`w-[50px] h-[50px] bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center`}
        >
          <FontAwesomeIcon icon={faBars} className={`scale-[0.9]`} />
        </div>
      </div>
      <div
        className={`w-full h-[70px] mt-[56px] flex flex-row justify-center items-center`}
      >
        <div
          className={`w-[1250px] h-[70px] flex flex-row justify-start items-center`}
        >
          <div
            className={`min-w-[50px] h-[70px] flex flex-col justify-center items-start`}
          >
            <p className={`text-[38px] font-medium fira-sans-semibold mb-[-2px]`}>
                Mercedes-Benz
            </p>
            <p className={`text-[18px] font-normal fira-sans-semibold text-gray-500`}>
                AMG 63 S Coupe - 2023
            </p>
          </div>
          <div
          className={`w-[50px] h-[50px] bg-gray-50 relative bottom-4 left-4 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] mt-2 flex flex-col justify-center items-center`}
        >
          <FontAwesomeIcon icon={faCircleExclamation} className={`scale-[0.9]`} />
        </div>
        </div>
      </div>
    </div>
  );
};
