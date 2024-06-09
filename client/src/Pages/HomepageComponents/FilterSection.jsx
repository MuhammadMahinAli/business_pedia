import PropTypes from "prop-types";

const FilterSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[389px] left-[65px] w-[310px] h-[89px] text-left text-6xl text-ffffff font-inter ${className}`}
    >
      <div className="text-4xl absolute top-[67px] left-[3px] tracking-[0.1em] capitalize inline-block ">
        raising now
      </div>
      <div className="absolute top-[0px] left-[0px] w-[310px] h-8 text-sm">
        <img
          className="absolute top-[7px] left-[53px] w-[18px] h-[18px] object-cover"
          alt=""
          src="/multiplication@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-[81px] h-8">
          <div className="absolute top-[0px] left-[0px] [filter:blur(50px)] rounded-lg [background:linear-gradient(104.74deg,_rgba(239,_125,_241,_0),_rgba(54,_243,_175,_0))] w-[81px] h-8" />
          <div className="absolute top-[-1px] left-[-1px] [backdrop-filter:blur(40px)] rounded-lg bg-gray-1100 box-border w-[83px] h-[34px] border-[1px] border-solid border-violet-300" />
        </div>
        <div className="absolute top-[7px] left-[99px] lowercase text-pink-400 inline-block w-[111px] h-[22px]">
          save this search
        </div>
        <div className="absolute top-[7px] left-[223px] lowercase inline-block w-[87px] h-[22px]">
          clear search
        </div>
        <div className="absolute top-[4px] left-[21px] text-lgi capitalize inline-block w-[25px] h-[22px]">
          AIl
        </div>
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  className: PropTypes.string,
};

export default FilterSection;
