import BottomSection from "../PackagesComponents/BottomSection";
import CenterSection from "../PackagesComponents/CenterSection";
import RightSection from "../PackagesComponents/RightSection";
import TopSection from "../PackagesComponents/TopSection";

const Packages = () => {
  return (
    <>
      <div className="w-full relative bg-gray-800 h-[1458px] overflow-hidden text-white">
        <BottomSection />
        <div className="absolute top-[1283px] right-[61.2px] w-[67.8px] h-[67px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[67.8px] h-[67px]">
            <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(40px)] rounded-41xl bg-gray-1000 box-border w-[67.8px] h-[67px] border-[1px] border-solid border-violet-100" />
          </div>
          <img
            className="absolute top-[7px] left-[10px] w-[49px] h-[49px] object-cover"
            alt=""
            src="/icons8robot96-1-1@2x.png"
          />
        </div>
        <img
          className="absolute w-[calc(100%_-_5px)] top-[23px] right-[0px] left-[5px] max-w-full overflow-hidden h-[517px]"
          alt=""
          src="/bg.svg"
        />
        <CenterSection />
        <RightSection />
        <TopSection />
      </div>
    </>
  );
};

export default Packages;
