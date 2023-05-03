import './Timeline.css';
import {useLayoutEffect} from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

import AllBusinessLogos from '../../Logos/AllBusinessLogos';
import TimelineImages from '../../JSONData/TimelineImages';

export const Timeline = () => {

  console.log(AllBusinessLogos, TimelineImages)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

    });
    return () => ctx.revert();
  });

  return (
    <div className='container-timeline'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{el:"", clickable: true}}
        navigation={{
          nextEl:'',
          prevEl:"",
          clickable: true
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className='swiper_container-timeline'
      >
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[0]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[1]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[2]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[3]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[4]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[5]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[6]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[7]}/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <img src={TimelineImages[8]}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
