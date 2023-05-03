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

import AllBusinessLogos from '../../Logos/TimelineBusiness';
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
          depth: 150,
          modifier: 2.5
        }}
        autoplay={{
          delay: 3500,
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
          <div className="tl-details">
                <div className="tl-details-body">
                  <img src={TimelineImages[0]}/>
                </div>
                <div className="tl-details-content">
                  <h2>1938</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Robert Fergusson Est.</p>
                  <div className="tl-details-header-logoctn">
                    <a href="http://fergiesbetta.com.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[0]}/>
                    </a>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
                <div className="tl-details-body">
                  <img src={TimelineImages[1]}/>
                </div>
                <div className="tl-details-content">
                  <h2>1947</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Samios Plumbing Supplies Est.</p>
                  <div className="tl-details-header-logoctn">
                    <a href="https://shop.samios.net.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[1]}/>
                    </a>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[2]}/>
              </div>
              <div className="tl-details-content">
                <h2>1952</h2>
                <div className="tl-details-h2-divider"></div>
                <p>CNW Electrical Wholesale Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://shop.cnw.com.au/" target="_blank" rel="noreferrer">
                    <img src={AllBusinessLogos[2]}/>
                  </a>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[3]}/>
              </div>
              <div className="tl-details-content">
                <h2>1975</h2>
                <div className="tl-details-h2-divider"></div>
                <p>Sherriff Electrical Wholesalers Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://shop.sherriff.com.au/" target="_blank" rel="noreferrer">
                    <img src={AllBusinessLogos[3]}/>
                  </a>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[4]}/>
              </div>
              <div className="tl-details-content">
                <h2>1982</h2>
                <div className="tl-details-h2-divider"></div>
                <p>BGW Group Est. and purchased CNW Electrical Wholesale.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://bgwgroup.com.au/" target="_blank" rel="noreferrer">
                    <img src={AllBusinessLogos[4]}/>
                  </a>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[5]}/>
              </div>
              <div className="tl-details-content">
                <h2>1985</h2>
                <div className="tl-details-h2-divider"></div>
                <p>Specialist Electrical Solutions Est.</p>
                <div className="tl-details-header-logoctn">
                  <a href="https://www.sesaustralia.com.au/" target="_blank" rel="noreferrer">
                    <img src={AllBusinessLogos[5]}/>
                  </a>
                </div>
              </div>
          </div>
      </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[6]}/>
              </div>
              <div className="tl-details-content">
                  <h2>1996</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Air Additions Est.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="http://airadditions.com.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[6]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[7]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2004</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Samios Plumbing Supplies purchased by BGW.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="https://shop.samios.net.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[7]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[8]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2005</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Sherriff Electrical Wholesalers purchased by BGW.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="https://shop.sherriff.com.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[8]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[9]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2006</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Air Additions purchased by BGW.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="http://airadditions.com.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[9]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[10]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2007</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Robert Fergusson purchased by BGW.</p>

                  <div className="tl-details-header-logoctn">
                    <a href="http://fergiesbetta.com.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[10]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[11]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2009</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>CNW Energy Est. by BGW.</p>
                  <div className="tl-details-header-logoctn">
                    <a href="http://cnwenergy.com.au/" target="_blank" rel="noreferrer">
                      <img src={AllBusinessLogos[11]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[12]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2012</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>Cablemakers Est. by BGW. SES purchased by BGW.</p>
                  <div className="tl-details-header-logoctn">
                    <a target="_blank" href="http://cablemakers.com.au/" rel="noreferrer">
                      <img src={AllBusinessLogos[12]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[13]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2013</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>BGW Tech Est. by BGW.</p>
                  <div className="tl-details-header-logoctn">
                    <a target="_blank" href="https://bgwt.com.au/" rel="noreferrer">
                      <img src={AllBusinessLogos[13]}/>
                    </a>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[14]}/>
              </div>
              <div className="tl-details-content">
                  <h2>2015</h2>
                  <div className="tl-details-h2-divider"></div>
                  <p>
                    EA Est. by CNW, R&M Electrical Group and Wholesale Electric Supply Company. BGW Group Solutions Est. by BGW.
                  </p>
                  <div className="tl-details-header-logoctn">
                    <a target="_blank" href="https://wea-asia.com/" rel="noreferrer">
                      <img src={AllBusinessLogos[14]}/>
                    </a>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-timeline'>
          <div className="tl-details">
              <div className="tl-details-body">
                <img src={TimelineImages[15]}/>
              </div>
              <div className="tl-details-content">
                <h2>2019</h2>
                <div className="tl-details-h2-divider"></div>
                <p>ILA Est. by BGW.</p>
                <div className="tl-details-header-logoctn">
                  <a target="_blank" href="https://www.innovativelighting.com.au/" rel="noreferrer">
                    <img src={AllBusinessLogos[15]}/>
                  </a>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
