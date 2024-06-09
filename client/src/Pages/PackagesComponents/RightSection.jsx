import PropTypes from "prop-types";
import card from '../../Pages/../assets/card12.png'

const RightSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[127px] right-[40px] w-[441px]  h-[554px] text-left text-xl text-ffffff font-inter ${className}`}
    >
       <img
        className="absolute  right-[88.21%]  left-[5.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={card}
      />
      {/* <div className="absolute top-[-2px] left-[-2px] shadow-[-5px_-5px_5px_1px_rgba(39,_203,_249,_0.15),_16px_16px_35px_3px_rgba(60,_60,_60,_0.2),_-14px_-14px_35px_2px_rgba(0,_0,_0,_0.15)_inset,_-20px_-20px_30px_-30px_rgba(255,_255,_255,_0.5)_inset] rounded-3xs bg-gray-500 box-border w-[445px] h-[558px] border-[2px] border-solid border-mediumspringgreen-200" />
      <div className="absolute h-[4.87%] w-[6.12%] top-[40.43%] right-[50.34%] bottom-[54.69%] left-[43.54%] overflow-hidden" />
      <div className="absolute h-[7.58%] w-[10.43%] top-[39.71%] right-[85.71%] bottom-[52.71%] left-[3.85%] overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[142px] h-[53.7px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(50px)] rounded-tl-3xs rounded-tr-none rounded-b-none [background:linear-gradient(104.74deg,_rgba(239,_125,_241,_0.5),_rgba(54,_243,_175,_0.5))] w-[142px] h-[53.7px]" />
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(40px)] rounded-tl-3xs rounded-tr-none rounded-b-none bg-gray-1000 box-border w-[142px] h-[53.7px] border-[2px] border-solid rec-item border-violet-100" />
      </div>
      <div className="absolute top-[0px] left-[142px] w-[152px] h-[53.7px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(50px)] [background:linear-gradient(104.74deg,_rgba(239,_125,_241,_0),_rgba(54,_243,_175,_0))] w-[152px] h-[53.7px]" />
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(40px)] bg-gray-1100 box-border w-[152px] h-[53.7px] border-[3px] border-solid border-violet-300" />
      </div>
      <div className="absolute top-[0px] left-[294px] w-[147px] h-[53.7px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(50px)] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(104.74deg,_rgba(239,_125,_241,_0),_rgba(54,_243,_175,_0))] w-[147px] h-[53.7px]" />
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(40px)] rounded-tl-none rounded-tr-3xs rounded-b-none bg-gray-1100 box-border w-[147px] h-[53.7px] border-[3px] border-solid border-violet-300" />
      </div>
      <div className="absolute top-[13px] left-[49px] capitalize font-semibold inline-block w-16 h-[27px]">
        free
      </div>
      <img
        className="absolute h-[3.79%] w-[6.12%] top-[64.62%] right-[88.21%] bottom-[31.59%] left-[5.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[3.79%] w-[6.12%] top-[70.4%] right-[88.21%] bottom-[25.81%] left-[5.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[3.79%] w-[6.12%] top-[42.24%] right-[88.21%] bottom-[53.97%] left-[5.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[3.79%] w-[6.12%] top-[53.43%] right-[88.21%] bottom-[42.78%] left-[5.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <b className="absolute top-[84px] left-[19px] text-lg capitalize inline-block w-[116px] h-[27px]">
        Essentials
      </b>
      <b className="absolute top-[188px] left-[19px] text-lg capitalize inline-block w-[116px] h-[27px]">
        Features
      </b>
      <div className="absolute top-[223px] left-[75px] text-base leading-[200%] capitalize font-semibold inline-block w-[333px] h-[170px]">
        <p className="m-0">Basic sales and customer feedback analysis.</p>
        <p className="m-0">Limited access to product and menu suggestions.</p>
        <p className="m-0">Weekly summary reports.</p>
        <p className="m-0">Email support.</p>
      </div>
      <div className="absolute top-[129px] left-[17px] text-sm capitalize inline-block w-[345px] h-[70px]">
        Small restaurants looking to get started with data-driven insights on a
        limited budget.
      </div>
      <div className="absolute top-[13px] left-[168px] text-2xl capitalize font-semibold inline-block w-[108px] h-[27px]">
        standared
      </div>
      <div className="absolute top-[13px] left-[316px] text-2xl capitalize font-semibold inline-block w-[98px] h-[27px]">
        premium
      </div>
      <div className="absolute top-[459px] left-[62px] w-[310px] h-[70px] text-center font-arial">
        <div className="absolute top-[2.4px] left-[0px] shadow-[0px_0px_4px_#fff_inset] rounded-8xs [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.04)),_radial-gradient(50%_50%_at_50%_50%,_rgba(19,_229,_213,_0.5)_19.66%,_rgba(19,_229,_213,_0.06)_71.06%),_radial-gradient(50%_50%_at_50%_50%,_#1d52a0,_rgba(29,_82,_160,_0.18)),_radial-gradient(50%_50%_at_50%_50%,_rgba(102,_129,_226,_0.81),_rgba(102,_129,_226,_0)_95.37%),_#eef9ff] w-[310px] h-[38.6px]" />
        <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_10px_rgba(255,_255,_255,_0.5)_inset,_-20px_-20px_50px_rgba(182,_117,_222,_0.4),_0px_20px_60px_rgba(98,_118,_224,_0.2),_0px_10px_60px_rgba(41,_142,_174,_0.8)] rounded-8xs [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.04)),_radial-gradient(50%_50%_at_50%_50%,_rgba(19,_229,_213,_0.5)_19.66%,_rgba(19,_229,_213,_0.06)_71.06%),_radial-gradient(50%_50%_at_50%_50%,_#1d52a0,_rgba(29,_82,_160,_0.18)),_radial-gradient(50%_50%_at_50%_50%,_rgba(102,_129,_226,_0.81),_rgba(102,_129,_226,_0)_95.37%),_#eef9ff] w-[310px] h-[38.6px]" />
        <div className="absolute top-[11px] left-[105px] capitalize flex items-center justify-center w-[94px] h-[17px]">
          Free
        </div>
        <div className="absolute top-[53px] left-[78px] text-lg capitalize flex items-center justify-center w-[158px] h-[17px]">
          compare pakages
        </div> 
      </div>*/}
    </div>
  );
};

RightSection.propTypes = {
  className: PropTypes.string,
};

export default RightSection;
