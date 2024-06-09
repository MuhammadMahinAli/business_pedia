import PropTypes from "prop-types";
import card from "../../Pages/../assets/free.png";
import card2 from "../../Pages/../assets/standerd.png";
import card3 from "../../Pages/../assets/premium.png";
import { useState } from "react";

const RightSection = ({ className = "" }) => {
  const [activeFree, setActiveFree] = useState(true);
  const [activeStanderd, setActiveStanderd] = useState(false);
  const [activePremium, setActivePremium] = useState(false);

  const toggleFree = ()=>{
    setActiveFree(true);
    setActivePremium(false);
    setActiveStanderd(false)
  }
  const toggleStanderd = ()=>{
    setActiveFree(false);
    setActivePremium(false);
    setActiveStanderd(true)
  }
  const togglePremium = ()=>{
    setActiveFree(false);
    setActivePremium(true);
    setActiveStanderd(false)
  }
  return (
    <div
      className={`absolute top-[127px] right-[40px] w-[441px]  h-[554px] text-left text-xl text-ffffff font-inter ${className}`}
    >
      {/* <img
        className="absolute  right-[88.21%]  left-[5.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={card}
      /> */}
      <div className=" mb-2 bg-gradient-to-r from-[#4EEBFF] from-10% via-[#AA62F9] via-30% to-[#F857FF] to-90% rounded-[10px]">
        <div className="m-[1px] bg-[#141920] bg-no-repeat bg-cover rounded-lg">
          <div className=" pt-[5px] rounded-t-xl  flex justify-between items-center w-full">
            <h1 onClick={toggleFree} className={` ${activeFree ? "border-2 border-[#4EEBFF]" : "border-white"}  border w-4/12 text-center px-0 py-2`}>Free</h1>
            <h1 onClick={toggleStanderd} className={` ${activeStanderd ? "border-2 border-[#4EEBFF]" : "border-white"} border w-4/12 text-center px-0 py-2`}>Standard</h1>
            <h1 onClick={togglePremium} className={` ${activePremium ? "border-2 border-[#4EEBFF]" : "border-white"} border w-4/12 text-center  px-0 py-2`}>Premium</h1>
          </div>

          <div className="flex justify-center items-center pb-2">

            {
              activeFree &&  <img className="" src={card} />
            }
            {
              activeStanderd &&  <img className="" src={card2} />
            }
            {
              activePremium &&  <img className="w-[400px]" src={card3} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

RightSection.propTypes = {
  className: PropTypes.string,
};

export default RightSection;
