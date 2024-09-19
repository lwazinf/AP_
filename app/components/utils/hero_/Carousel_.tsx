import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel_ = () => {
  const [items, setItems] = useState([
    { dims: "min-w-[275px]", img: "/assets/images/1.jpg" },
    { dims: "min-w-[216px]", img: "/assets/images/2.jpg" },
    { dims: "min-w-[217px]", img: "/assets/images/3.jpg" },
    { dims: "min-w-[196px]", img: "/assets/images/4.jpg" },
    { dims: "min-w-[275px]", img: "/assets/images/5.jpg" },
  ]);

  const scrollLeft = () => {
    setItems((prevItems) => {
      const firstItem = prevItems[0];
      const remainingItems = prevItems.slice(1);
      return [...remainingItems, firstItem];
    });
  };

  const scrollRight = () => {
    setItems((prevItems) => {
      const lastItem = prevItems[prevItems.length - 1];
      const remainingItems = prevItems.slice(0, -1);
      return [lastItem, ...remainingItems];
    });
  };

  return (
    <div className="w-[1250px] min-h-2 pt-[10px] flex flex-row items-center justify-center">
      <div className="min-w-[48px] h-[48px] transition-all duration-200 flex flex-row justify-center items-center absolute top-[-30px] right-6">
        <div
          className="w-[38px] h-[38px] z-[2] bg-[#f8f9fd]/60 relative hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] flex flex-col justify-center items-center"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="scale-[0.9] opacity-60"
          />
        </div>
        <div
          className="w-[38px] h-[38px] z-[2] bg-[#f8f9fd]/60 relative left-1 hover:bg-gray-200 cursor-pointer transition-all duration-200 border-solid border-[1px] border-gray-200 rounded-[50%] flex flex-col justify-center items-center"
          onClick={scrollRight}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="scale-[0.9] opacity-30"
          />
        </div>
      </div>

      <div className="min-w-[275px] h-[145px] transition-all duration-200 flex flex-row justify-center items-center mb-[10px] overflow-hidden">
        {items.slice(0, 5).map((obj_, index_) => (
          <div
            className={`${obj_.dims} relative overflow-hidden h-[145px] mr-3 rounded-[25px] bg-[#f8f9fd]/60 hover:bg-gray-200 border-solid border-[1px] border-gray-200 cursor-pointer transition-all duration-200 z-[2] flex flex-col justify-center items-center`}
            key={index_}
          >
            <img
              className="w-full h-full object-cover scale-1 hover:scale-[1.2] transition-all duration-200 cursor-pointer"
              src={obj_.img}
              alt={`Slide ${index_}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel_;
