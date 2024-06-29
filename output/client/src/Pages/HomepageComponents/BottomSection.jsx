import PropTypes from "prop-types";
import card from '../../assets/bottom.png'

const BottomSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[247.5px]  -left-[1px]  h-[81px] text-left text-base text-ffffff font-inter ${className}`}
    >
         <img src={card}  alt=''/>
    </div>
  );
};

BottomSection.propTypes = {
  className: PropTypes.string,
};

export default BottomSection;
