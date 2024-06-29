import PropTypes from "prop-types";
import center from '../../assets/centersection.png'

const CenterSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[650px] left-[45px]  rounded-mini overflow-hidden flex flex-col items-start justify-start py-4 px-[21px] gap-[10px] text-left text-smi text-ffffff font-inter  ${className}`}
    >
       <img src={center} alt=''/>
    </div>
  );
};

CenterSection.propTypes = {
  className: PropTypes.string,
};

export default CenterSection;
