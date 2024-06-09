import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import sl1 from '../assets/sl1.png'
import sl2 from '../assets/sl2.png'
import sl3 from '../assets/sl3.png'

const Slider = () => {
 const images =[
    {
        id:1,
        title:"Menu Update Suggestions",
        image:sl1,
        suggestion:"Introduce new lunch combos and promotions to sustain the increase in lunch sales. Introduce new lunch............"
    },
    {
        id:1,
        title:"Business Strategy Suggestions",
        image:sl2,
        suggestion:"Loyalty Program: Implement a loyalty program to reward repeat customers and increase retention. Offer ..............."
    },
    {
        id:1,
        title:"Positive Feedback on New Dishes",
        image:sl3,
        suggestion:"Customers have given high ratings (average 4.7/5) for the recently introduced vegan options. Continue ......................"
    }
 ]

  return (
    <div className="w-full h-[280px]">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images?.map((im, i) => (
          <SwiperSlide className="" key={i}>
            <img
              src={im.image}
              className="object-center w-full rounded-[10px]"
              alt="hero"
            />
            <h1 className="text-2xl py-2 px-1">{im.title}</h1>
            <h1 className="text-[14px] px-1 pb-2">{im.suggestion}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
