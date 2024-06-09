import PropTypes from "prop-types";
import { FaUser, FaRegMoon } from "react-icons/fa6";

const RightSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-full w-[10.37%] top-[0%] right-[-15.77%] bottom-[0%] left-[105.39%] text-center text-lg text-ffffff font-font-awesome-6-pro ${className}`}
    >
      <div className="absolute h-full w-[43.15%] top-[0%] right-[0%] bottom-[0%] left-[56.85%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
          {/* <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-dodgerblue" /> */}
     
          <div className="bg-blue-500 rounded-full absolute top-[calc(35%_-_9px)] left-[calc(40%_-_8.2px)]">
          <FaUser className='text-xl m-2 text-white' />
          </div>
        </div>
      </div>
      <div className="absolute  top-[20.45%] right-[68.61%] bottom-[20.45%] left-[0%] overflow-hidden text-5xl text-gainsboro">
        {/* <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_8.15px)] hidden">
          
        </div> */}
        <div className="absolute top-[calc(45%_-_13px)] left-[calc(50%_-_16.15px)] text-ffffff">
        <FaRegMoon className="text-3xl"/>
        </div>
      </div>
    </div>
  );
};

RightSection.propTypes = {
  className: PropTypes.string,
};

export default RightSection;
