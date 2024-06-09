import PropTypes from "prop-types";
import faq from '../../assets/bottomsection.png'

const FaqSection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[202px] left-[70px]  flex flex-col items-start justify-start gap-[10px] text-left text-xl text-ffffff font-inter ${className}`}
    >
         <img src={faq} alt=''/>
    </div>
  );
};

FaqSection.propTypes = {
  className: PropTypes.string,
};

export default FaqSection;
