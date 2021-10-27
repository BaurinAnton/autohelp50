import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

import style from './style.module.scss'

SwiperCore.use([Scrollbar, Autoplay]);

export const SwiperDesktop = ({ imagesSwiper }) => {
    const images = imagesSwiper.map((list) => (
        <SwiperSlide key={list.id} className={style.swiperSlide} >
            <img src={list.src} alt={list.alt} />
        </SwiperSlide>
    ))
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            className={style.Swiper}
            autoplay={{ delay: 2000 }}
            disableOnInteraction={true}
            loop={true}
        >
            <>
                {images}
            </>
        </Swiper>
    )
}