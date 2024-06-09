import FaqSection from "./FaqSection";
import PropTypes from "prop-types";

const BottomSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[790px] right-[2px] left-[-2px] h-[396px] text-left text-xl text-ffffff font-inter ${className}`}
    >
      <div className="absolute top-[0.4px] left-[818.7px] [filter:blur(179px)] rounded-[50%] bg-gray-300 w-[213.1px] h-[421.9px] [transform:_rotate(85.7deg)] [transform-origin:0_0]" />
      <div className="absolute top-[347.3px] left-[1221.2px] [filter:blur(179px)] rounded-[50%] bg-gray-300 w-[227.8px] h-[451.1px] [transform:_rotate(140.3deg)] [transform-origin:0_0]" />
      <div className="absolute top-[389.2px] left-[1008.3px] [filter:blur(179px)] rounded-[50%] bg-gray-300 w-[123.8px] h-[474.9px] [transform:_rotate(101.8deg)] [transform-origin:0_0]" />
      <div className="absolute top-[171px] left-[976.4px] [filter:blur(179px)] rounded-[50%] bg-gray-300 w-[174.4px] h-[450.9px] [transform:_rotate(75.4deg)] [transform-origin:0_0]" />
      <div className="absolute top-[418px] left-[0px] [filter:blur(200px)] rounded-[50%] bg-mediumspringgreen-100 w-[166px] h-[99px]" />
      <div className="absolute top-[72px] left-[907px] [filter:blur(200px)] rounded-[50%] bg-mediumspringgreen-100 w-[166px] h-[99px]" />
      <div className="absolute top-[0px] left-[-42px] [filter:blur(500px)] rounded-[50%] bg-violet-100 w-[165px] h-[327px]" />
      <div className="absolute top-[274px] left-[990px] [filter:blur(500px)] rounded-[50%] bg-violet-100 w-[165px] h-[327px]" />
      <FaqSection />
    </div>
  );
};

BottomSection.propTypes = {
  className: PropTypes.string,
};

export default BottomSection;
