import AOS from "aos";
import "aos/dist/aos.css";
const AiPopup = () => {
  AOS.init();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="absolute z-50 top-10 right-5 md:top-16 md:right-10 lg:right-[400px] 3xl:right-16 shadow-2xl w-48 py-3 px-[3px] rounded-lg bg-[#918d8f]"
    >
      {/* profile and button */}
      <div className="px-2">
        {/* profile image and name */}
        <div className="  py-3">
          <div className="flex items-center space-x-2">
            <input type="checkbox" />
            <h1 className="text-lg font-semibold">Fashion Ai</h1>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" />
            <h1 className="text-lg font-semibold">Farming Ai</h1>
          </div>
          <div className="flex items-center space-x-2">
            <input checked type="checkbox" />
            <h1 className="text-lg font-semibold">Restaurant Ai</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPopup;
