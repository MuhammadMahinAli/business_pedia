import PropTypes from "prop-types";

const Topsection = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[188px] left-[72px] w-[972px] h-[78px] text-left text-9xl text-ffffff font-inter ${className}`}
    >
      <div className="text-2xl absolute top-[-14px] left-[0px] capitalize font-semibold inline-block w-[836px] h-[43px]">
        Unlock Success. Expert guidance tailored to your industry.
      </div>
      <div className="absolute top-[33px] left-[0px] text-lg capitalize inline-block w-[978px] h-[31px]">
        Unlock your business's potential with expert guidance from our diverse
        team of mentors specializing in various industries.
      </div>
    </div>
  );
};

Topsection.propTypes = {
  className: PropTypes.string,
};

export default Topsection;
