import o from "../../assets/td.png";
import s from "../../assets/sidebar.png";
import nps from "../../assets/nps.png";
import ss from "../../assets/ss.png";
import af from "../../assets/af.png";
import cb from "../../assets/cb.png";
import tp from "../../assets/tp.png";
import dt from "../../assets/date.png";
import rs from "../../assets/restaurant.png";
import rf from "../../assets/refresh.png";
import Chatbot1 from "../Chatbot1";
import { useState } from "react";
import AiPopup from "../../common/AiPopup";
import Slider from "../../common/Slider";

const Dashboard = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="w-full relative bg-gray-800 h-[1658px] overflow-hidden text-white">
      <div className="absolute top-[10px] left-[300px] w-9/12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <img
              onClick={() => setOpenPopup(!openPopup)}
              className=""
              src={rs}
              alt=""
            />
            <img className="" src={rf} alt="" />
            <img className="" src={dt} alt="" />
          </div>
          {openPopup && <AiPopup openPopup={openPopup} />}
        </div>
      </div>
      <div className=" w-[350px] absolute right-[20px] top-[85px]">
        <Chatbot1 />
      </div>
      <div className=" bg-gradient-to-r from-[#4EEBFF] from-10% via-[#AA62F9] via-30% to-[#F857FF] to-90% rounded-[10px] absolute left-[700px] top-[715px]">
        <div className="m-[1px] bg-[url('/gradient-background1.png')] bg-no-repeat bg-cover rounded-lg h-[280px] w-[310px] ">
          <Slider />
        </div>
      </div>
      <img className="absolute left-[300px] top-[85px]" src={o} alt="" />
      <img className="absolute left-[300px] top-[370px]" src={ss} alt="" />
      <img className="absolute left-[300px] top-[720px]" src={af} alt="" />
      <img className="absolute left-[300px] top-[1005px]" src={tp} alt="" />
      <img
        className="absolute left-[700px] top-[1040px] w-[315px] h-[300px]"
        src={nps}
        alt=""
      />
      <img className="absolute right-[10px] top-[715px]" src={cb} alt="" />
      <img className="absolute left-[10px] top-[10px]" src={s} alt="" />
    </div>
  );
};

export default Dashboard;
