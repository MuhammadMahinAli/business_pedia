import PropTypes from "prop-types";
import card from '../../assets/card5.png'

const CardFive = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1020px] left-[485.2px]  h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
        <img src={card} alt=''/>
    </div>
  );
};

CardFive.propTypes = {
  className: PropTypes.string,
};

export default CardFive;
