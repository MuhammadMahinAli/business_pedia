import PropTypes from "prop-types";
import card from '../../assets/card2.png'

const CardTwo = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[525px] left-[485.2px] h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
        <img src={card} alt=''/>
    </div>
  );
};

CardTwo.propTypes = {
  className: PropTypes.string,
};

export default CardTwo;
