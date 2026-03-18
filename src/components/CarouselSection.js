import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner-and-eCommerce 1.png";
import banner2 from "../assets/gms-slide-1-opt.jpg.png";
import banner3 from "../assets/gms-slide-2-opt.jpg.png";


function CarouselSection() {
    return (
    <>
        <Swiper className="mySwiper">
            <SwiperSlide>
                <img width={"100%"} height={"100%"} src={banner1} alt="banner-1"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img width={"100%"} height={"100%"} src={banner2} alt="banner-1"></img> 
            </SwiperSlide>
            <SwiperSlide>
                <img width={"100%"} height={"100%"} src={banner3} alt="banner-1"></img>
            </SwiperSlide>
        </Swiper>
    </>
    );
}

export default CarouselSection;