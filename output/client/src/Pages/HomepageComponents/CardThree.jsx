import PropTypes from "prop-types";
import card from '../../assets/card3.png'

const CardThree = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[525px] left-[891px] h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
        <img src={card} alt=''/>
    </div>
  );
};

CardThree.propTypes = {
  className: PropTypes.string,
};

export default CardThree;
