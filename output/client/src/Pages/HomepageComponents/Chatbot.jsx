import PropTypes from "prop-types";
import chatbot from '../../assets/chatbot.png'

const Chatbot = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2026px] right-[65.2px] w-[67.8px] h-[70px] overflow-hidden ${className}`}
    >
         <img src={chatbot} alt=''/>
    </div>
  );
};

Chatbot.propTypes = {
  className: PropTypes.string,
};

export default Chatbot;
