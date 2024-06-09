import { Link } from "react-router-dom";
import RightSection from "./RightSection";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[36px] left-[50px] w-[992px] h-11 text-center text-lg text-ffffff font-font-awesome-6-pro ${className}`}
    >
      <RightSection />
      <div className="absolute top-[12.5px] left-[calc(50%_-_75px)] w-[216px] h-[19px] text-left text-base font-inter">
        <div className="text-lg absolute top-[0px] left-[0px] capitalize font-extrabold">
          <Link to='/'>
          home
          </Link>
        </div>
        <div className="text-lg absolute top-[0px] left-[84px] capitalize">
        <Link to='/dashboard'>
          Dashboard
          </Link>
        </div>
        <img
          className="absolute top-[-23px] left-[-439px] w-[81px] h-[68px] object-cover"
          alt=""
          src="/screenshot-20240521-214007-chatgptremovebgpreview-2@2x.png"
        />
        <b className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_384px)] text-2xl flex font-archivo text-lavender items-center w-[228px] h-[29px]">
          Business Pedia
        </b>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
