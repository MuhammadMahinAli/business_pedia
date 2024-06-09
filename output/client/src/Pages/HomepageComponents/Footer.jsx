import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2147px] left-[2px] w-[1276px] h-[52px] text-left text-xs text-ffffff font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[-3.6px] w-[1281.1px] h-[53px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(50px)] [background:linear-gradient(104.74deg,_rgba(239,_125,_241,_0.5),_rgba(54,_243,_175,_0.5))] w-[1281.1px] h-[52px]" />
        <div className="absolute top-[1px] left-[3.6px] [backdrop-filter:blur(40px)] bg-gray-1000 w-[1276px] h-[52px]" />
      </div>
      <div className="absolute top-[21px] left-[32px] text-mini tracking-[-0.02em] capitalize flex items-center w-[89px] h-3">
        Lorem ipsum
      </div>
      <div className="absolute top-[22px] left-[724px] tracking-[-0.02em] capitalize flex items-center w-[76px] h-3">
        Lorem ipsum
      </div>
      <div className="absolute top-[23px] left-[822px] tracking-[-0.02em] capitalize flex items-center w-[74px] h-3">
        Lorem ipsum
      </div>
      <div className="absolute top-[20px] left-[918px] tracking-[-0.02em] capitalize flex items-center w-[74px] h-3">
        Lorem ipsum
      </div>
      <div className="absolute top-[20px] left-[1014px] tracking-[-0.02em] capitalize flex items-center w-[74px] h-3">
        Lorem ipsum
      </div>
      <div className="absolute top-[21px] left-[1110px] tracking-[-0.02em] capitalize flex items-center w-[74px] h-3">
        Lorem ipsum
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
