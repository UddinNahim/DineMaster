// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

import img1 from "../../assets/home/01.jpg"
import img2 from "../../assets/home/02.jpg"
import img3 from "../../assets/home/03.png"
import img4 from "../../assets/home/04.jpg"
import img5 from "../../assets/home/05.png"
import img6 from "../../assets/home/06.png"



const Banner = () => {
    return (


            <>
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000, // Time in ms between slides (3 seconds in this case)
                        disableOnInteraction: false, // Keeps autoplay running after user interaction
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="Slide 4" /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="Slide 5" /></SwiperSlide>
                    <SwiperSlide><img src={img6} alt="Slide 6" /></SwiperSlide>
                </Swiper>
            </>


    );
};

export default Banner;