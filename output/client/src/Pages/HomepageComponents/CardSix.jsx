import PropTypes from "prop-types";
import card from '../../assets/card6.png'

const CardSix = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1020px] left-[891px] h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
   <img src={card} alt=''/>
    </div>
  );
};

CardSix.propTypes = {
  className: PropTypes.string,
};

export default CardSix;
