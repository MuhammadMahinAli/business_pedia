import PropTypes from "prop-types";
import card from '../../assets/card9.png'

const CardNine = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1519.5px] left-[891px]  h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
   <img src={card} alt=''/>
    </div>
  );
};

CardNine.propTypes = {
  className: PropTypes.string,
};

export default CardNine;
