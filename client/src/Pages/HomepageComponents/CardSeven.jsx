import PropTypes from "prop-types";
import card from '../../assets/card7.png'

const CardSeven = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1521.5px] left-[87px]  h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
         <img src={card} alt=''/>
    </div>
  );
};

CardSeven.propTypes = {
  className: PropTypes.string,
};

export default CardSeven;
