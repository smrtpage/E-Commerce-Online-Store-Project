import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "@chakra-ui/react";
import { Autoplay, Pagination } from "swiper/modules";
import sneakerpic from "../assets/sneakerpic.jpg";
import clothespic from "../assets/clothespic.jpg";
import carhartt4pic from "../assets/carhartt4webp.webp";
import "./Slider.css";

const Slider: React.FC = () => {
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="Slide">
          <Image
            objectFit="cover"
            className="SlideImg"
            src={sneakerpic}
            alt="Sneakers"
          />
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <Image
            objectFit="cover"
            className="SlideImg"
            src={clothespic}
            alt="Clothes"
          />
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <Image
            objectFit="cover"
            className="SlideImg"
            src={carhartt4pic}
            alt="Clothes"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
