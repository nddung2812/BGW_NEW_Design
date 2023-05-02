import './ExperiencesRight.css';

import { useLayoutEffect } from "react";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faPen,
  faCalendar,
  faLocationPin
} from '@fortawesome/free-solid-svg-icons';

import { gsap } from "gsap";

export const ExperiencesRight = () => {

  const project1Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject1.jpg?alt=media&token=63ba3fba-6ee5-4677-b774-4383130069d9"
        ,project2Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject2.jpg?alt=media&token=9d29d754-8e2e-4356-aaf3-5c18e2cdf076"
        ,project3Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject3.jpg?alt=media&token=cf15cf4c-d546-452a-8d33-947d76255fe5"
        ,project4Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject4.jpg?alt=media&token=387c8b73-39a5-452b-bef5-2a813b631edb"
        ,project5Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject5.jpg?alt=media&token=cd2a9154-fbaa-4966-8afc-54ea4587abf7"
        ,project6Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject6.jpg?alt=media&token=d0c5c5de-2c28-46dd-8f3f-52100c00d830"
        ,project7Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject7.jpg?alt=media&token=086e7b63-88e8-45d9-b455-4050707eb913"
        ,project8Url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Project%20Images%2Fproject8.jpg?alt=media&token=5f9af5b2-10ec-4f34-9cd0-60c489c62818";
  

//   useLayoutEffect(() => {
    
//     let mm = gsap.matchMedia();
//     let ctx = gsap.context(() => {
//       mm.add(
//         "(min-width: 678px)", () => {
//           gsap.to('.project-carousel-ctn', {
//             x: 0,
//             opacity: 1,
//             scrollTrigger: {
//               trigger: '.three',
//               start: "bottom bottom",
//               stop: "bottom center",
//               scrub: 1
//             }
//           })
//         })   
//     })
//     return () => ctx.revert()  
//   }, [])

  return (
    <div className='project-carousel-ctn'>
        <div className="main-carousel">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="project-swiper project-swiper-horizontal"
          >
            <SwiperSlide className='project-swiper-slide'>
              <img src={project1Url} alt="cnw glencore" loading="lazy"/>
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Glencore - Mount Isa Mines</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>1999</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Mount Isa, Australia</p>
                   </div>
                </div>
           
              </div>
            </SwiperSlide>
            <SwiperSlide className='project-swiper-slide'>
              <img src={project2Url}  alt="coopers malting plant" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Coopers Malting Plant</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2008</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Regency Park, SA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='project-swiper-slide'>
              <img src={project3Url}  alt="cnw singapore tunnel mtr" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Singapore Tunnel MTR</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2012</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Singapore</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project4Url}  alt="cnw sunshine coast" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Sunshine Coast University Hospital</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Completed</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2016</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Sunshine Coast, QLD</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project5Url}  alt="collinsville" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Collinsville Solar Farm</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2017</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Collinsville, QLD</p>
                   </div>
                </div>
          
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project6Url}  alt="cnw gorgon lng" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Gorgon LNG</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Completed</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2017</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Barrow Island, WA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className='project-swiper-slide'>
              <img src={project7Url}  alt="osborne naval shipyard" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">Osborne Naval Shipyard</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2018</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Adelaide, SA</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='project-swiper-slide'>
              <img src={project8Url}  alt="gladstone power station" loading="lazy" />
              <div className="project-details-ctn">
                <div className="project-details">
                  <div className="project-name">NRG Gladstone Power Station</div>
                  <div className="project-status">
                    <FontAwesomeIcon className="project-icon" icon={faPen}  />
                    <p>Ongoing</p>
                  </div>
                  <div className="project-year">
                    <FontAwesomeIcon className="project-icon" icon={faCalendar}  />
                    <p>2018</p>
                  </div>
                  <div className="project-location">
                    <FontAwesomeIcon className="project-icon" icon={faLocationPin}  />
                    <p>Gladstone, QLD</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
       
        </div>
    </div>
  )
}
