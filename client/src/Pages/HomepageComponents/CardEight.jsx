import PropTypes from "prop-types";
import card from '../../assets/card8.png'

const CardEight = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1520.5px] left-[485.2px] h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
         <img src={card} alt=''/>
      </div>
  );
};

CardEight.propTypes = {
  className: PropTypes.string,
};

export default CardEight;
