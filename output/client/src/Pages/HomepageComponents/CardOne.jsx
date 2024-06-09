import PropTypes from "prop-types";
import card from '../../assets/card1.png'
import { Link } from "react-router-dom";

const CardOne = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[525px] left-[87px] h-[451px] text-left text-mini text-ffffff font-inter ${className}`}
    >
            <Link to='/package'>
     <img src={card} alt=''/>
     </Link>
    </div>
  );
};

CardOne.propTypes = {
  className: PropTypes.string,
};

export default CardOne;

{/* <div className="absolute top-[-2px] left-[-2px] shadow-[-5px_-5px_5px_1px_rgba(39,_203,_249,_0.15),_16px_16px_35px_3px_rgba(60,_60,_60,_0.2),_-14px_-14px_35px_2px_rgba(0,_0,_0,_0.15)_inset,_-20px_-20px_30px_-30px_rgba(255,_255,_255,_0.5)_inset] rounded-mini bg-gray-500 box-border w-[294px] h-[455px] border-[2px] border-solid border-mediumspringgreen" />
<img
  className="absolute top-[-1px] left-[0px] rounded-t-mini rounded-b-none w-[290px] h-[212px] object-cover"
  alt=""
  src="/rectangle-26@2x.png"
/>
<b className="absolute top-[267px] left-[17px] text-lg capitalize inline-block w-64 h-[55px]">
  Food Industry Growth Consultant
</b>
<div className="absolute top-[242px] left-[17px] tracking-[-0.02em] capitalize text-silver flex items-center w-[89px] h-3">
  Li Wei
</div>
<img
  className="absolute top-[182px] left-[202px] rounded-41xl w-14 h-14 object-cover"
  alt=""
  src="/circle@2x.png"
/>
<div className="absolute top-[411px] left-[8px] rounded bg-gray-200 box-border w-[119px] h-[21px] border-[1px] border-solid border-deepskyblue" />
<div className="absolute top-[411px] left-[133px] rounded bg-gray-200 box-border w-[97px] h-[21px] border-[1px] border-solid border-deepskyblue" />
<div className="absolute top-[322px] left-[17px] capitalize inline-block w-64 h-[55px]">
  Advise on scaling production, optimizing supply chains, and meeting food
  safety standards.
</div>
<div className="absolute top-[413px] left-[15px] text-xs capitalize inline-block w-[137px] h-[21px]">{`#FoodProduction `}</div>
<div className="absolute top-[413px] left-[140px] text-xs capitalize inline-block w-[137px] h-[21px]">{`#SupplyChain `}</div> */}
