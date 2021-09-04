import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './NewSlider.css';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from 'swiper/core';
import CardUI from './CardUI';
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Keyboard]);
function NewSlider() {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        effect={'coverflow'}
        centeredSlides={true}
        spaceBetween={500}
        slidesPerView={window.innerWidth < 768 ? 1 : 'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardUI className="imgAd" />
        </SwiperSlide>
        <SwiperSlide>
          <CardUI className="imgAd" />
        </SwiperSlide>
        <SwiperSlide>
          <CardUI className="imgAd" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NewSlider;
