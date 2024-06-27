import { Link } from "react-router-dom";
import RightSection from "./RightSection";
import PropTypes from "prop-types";
import { FaRegMoon, FaUser } from "react-icons/fa6";

const Navbar = ({ className = "" }) => {
  return (
    <div
      className={`bg-[#1f2937] text-white py-16 w-full text-center text-lg text-ffffff font-font-awesome-6-pro ${className}`}
    >
      {/* <RightSection /> */}
      <div className="absolute top-[32.5px] left-[calc(50%_-_75px)] w-[216px] h-[19px] text-left text-base font-inter">
        <div className="text-lg absolute top-[10px] left-[0px] capitalize font-extrabold">
          <Link to='/'>
          home
          </Link>
        </div>
        <div className="text-lg absolute top-[10px] left-[84px] capitalize">
        <Link to='/dashboard'>
          Dashboard
          </Link>
        </div>
        <img
          className="absolute top-[-23px] left-[-439px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/screenshot-20240521-214007-chatgptremovebgpreview-2@2x.png"
        />
        <b className="absolute top-[10px] left-[calc(50%_-_384px)] text-2xl flex font-archivo text-lavender items-center w-[228px] h-[29px]">
          Business Pedia
        </b>
        {/* icon */}
        <div className=" absolute -right-[350px]">

          <div className="flex items-center space-x-14">
          <FaRegMoon className="text-3xl"/>
          <div className="bg-blue-500 rounded-full ">
          <FaUser className='m-2 text-xl  text-white ' />
          </div>
        
          </div>

        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
