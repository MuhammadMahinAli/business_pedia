import BottomSection from "../HomepageComponents/BottomSection";
import CardEight from "../HomepageComponents/CardEight";
import CardFive from "../HomepageComponents/CardFive";
import CardFour from "../HomepageComponents/CardFour";
import CardNine from "../HomepageComponents/CardNine";
import CardOne from "../HomepageComponents/CardOne";
import CardSeven from "../HomepageComponents/CardSeven";
import CardSix from "../HomepageComponents/CardSix";
import CardThree from "../HomepageComponents/CardThree";
import CardTwo from "../HomepageComponents/CardTwo";
import Chatbot from "../HomepageComponents/Chatbot";
import FilterSection from "../HomepageComponents/FilterSection";
import ToggleTab from "../HomepageComponents/ToggleTab";
import Topsection from "../HomepageComponents/TopSection";

const HomePage = () => {
  return (
    <div className="w-full relative text-white bg-gray-800 h-[2199px] overflow-hidden">
      <img
        className="absolute w-full top-[1037px] right-[2px] left-[-2px] max-w-full overflow-hidden h-[624px]"
        alt=""
        src="/frame-11.svg"
      />
      <Chatbot />
      <img
        className="absolute w-[calc(100%_-_5px)] top-[23px] right-[0px] left-[5px] max-w-full overflow-hidden h-[517px]"
        alt=""
        src="/bg.svg"
      />
      <CardOne />
      <CardFour />
      <CardSeven />
      <CardTwo />
      <CardFive />
      <CardEight />
      <CardThree />
      <CardSix />
      <CardNine />
      <FilterSection />
      {/* <Navbar /> */}
      <Topsection />
      <ToggleTab />
      <BottomSection />
    </div>
  );
};

export default HomePage;
