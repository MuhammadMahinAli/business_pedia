import PropTypes from "prop-types";
import card from '../../assets/topsection.png'

const TopSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[100px] left-[39px] h-[587px] flex flex-col items-start justify-start gap-[10px] text-left text-base text-ffffff font-inter ${className}`}
    >
        <img src={card} alt=''/>
    </div>
  );
};

TopSection.propTypes = {
  className: PropTypes.string,
};

export default TopSection;
