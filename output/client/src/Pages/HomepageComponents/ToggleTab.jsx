import PropTypes from "prop-types";
import tabs from '../../assets/toggle-tab.png'

const ToggleTab = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[22px] w-[300px] h-16 text-left text-lg text-ffffff font-inter ${className}`}
    >
         <img src={tabs} alt=''/>
    </div>
  );
};

ToggleTab.propTypes = {
  className: PropTypes.string,
};

export default ToggleTab;
