import {useLayoutEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./MCarousel.css";
import PhotoArray from '../../Logos/AllBusinessLogos';

import {
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

export const MCarousel = () => {
  gsap.registerPlugin(ScrollTrigger);
  let xPos = 0;
  const ring = useRef();
  const stage = useRef();

  // Mouse Enter and Leave Events
  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget,{ scale:1.05})
  }
  
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget, { scale: 1})
  }
  
  function dragStart(e){ 
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set(ring.current, {cursor:'grab'})
    stage.current.addEventListener('mousemove', drag);
  }


  let mm = gsap.matchMedia();
  function drag(e){
    mm.add(
      "(min-width: 1280px)", () => {
      if (e.touches) e.clientX = e.touches[0].clientX;    

      gsap.to(ring.current, {
        rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
        onUpdate:()=>{ gsap.set('.img-ctn', { backgroundPosition:(i)=>getBgPos(i) }) },
      });
      xPos = Math.round(e.clientX);
    })
  }


  function dragEnd(){
    stage.current.removeEventListener('mousemove', drag);
  }


  function getBgPos(e){ //returns the background-position string to create parallax movement in each image
    return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-e*36)/360*500 )+'px 0px';
  } 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline()
      .set('.img-ctn',  { // apply transform rotations to each image
        rotateY: (e)=> e*-32.72,
        transformOrigin: '50% 50% 1500rem',
        z: -1450,
        backgroundPosition:(e)=>getBgPos(e),
        backfaceVisibility:'hidden'
      });
      
        stage.current.addEventListener('mousedown', dragStart);
        stage.current.addEventListener('mouseup', dragEnd);
    }, ring)
    return () => ctx.revert();
  },[])


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add(
        "(min-width: 678px)", () => {
          gsap.to(ring.current, {
            rotateY: (i) =>i +150,
            duration: 100,
            scrollTrigger: {
              trigger: ring.current,
              start: "top 90%",
              scrub: true,
            }
          })
        })
      })
      return () => ctx.revert();
    })
  

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        let mm = gsap.matchMedia();
        mm.add(
          "(max-width: 1025px)", () => {
            gsap.to(ring.current, {
              rotateY: "+=360",
              duration: 20,
              repeat: -1,
              yoyo: true
            })
          })
        })
        return () => ctx.revert();
      })  
  return (
    <div className="stage" 
      ref={stage} 
    >

      <div className="carousel-container" >
        <div className="ring" ref={ring} >
          <div className="img-ctn carousel-cnw" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://shop.cnw.com.au/" rel="noreferrer" >
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
              <img className="inner-img" src={PhotoArray[0]} alt="cnw"/>
            <div className="intro-snippet">
              <h2>CNW</h2>
              <p>
                CNW Electrical is the largest Australian-owned independent electrical wholesaler. We stock an extensive range of high quality products in over 50 convenient locations across Australia and our local knowledge and comprehensive stock holdings ensure we have what you need, where you need it. 
              </p>
            </div>
          </div>
          
          <div className="img-ctn carousel-samios" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://shop.samios.net.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[1]}  alt="samios"/>
            <div className="intro-snippet">
              <h2>Samios</h2>
              <p>
                Since 1947 Samios Plumbing Supplies has been an Australian owned and operated wholesale business that provides exceptional service and quality products online and through our national branch network.
              </p>
            </div>
          </div>
          
          <div className="img-ctn carousel-sherriff" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://shop.sherriff.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[2]}  alt="sherriff"/>
            <div className="intro-snippet">
              <h2>Sherriff</h2>
              <p>
                Sherriff Electrical provides exceptional customer service and the best electrical products at the best price. We provide personal service and customise our solutions to suit each customer and their needs.
              </p>
            </div>
          </div>
          
          <div className="img-ctn carousel-wea" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://wea-asia.com/" rel="noreferrer" >
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[3]} alt="wholesale electric asia"/>
            <div className="intro-snippet">
              <h2>Wholesale Electric Asia</h2>
              <p>
                Wholesale Electric Asia (WEA) delivers Electrical/Instrumentation engineering and supply solutions for Energy, Infrastructure, Defence, Transportation, Mining & Data Center / Industrial projects. Together with our Global Investor Partners, we combine more than 100 years of experience across the globe.
              </p>
            </div>
          </div>
          
          <div className="img-ctn carousel-bgwt" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://bgwt.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[4]} alt="bgw technologies"/>
            <div className="intro-snippet">
              <h2>BGW Technologies</h2>
              <p>
                BGW Technologies is a specialist security wholesaler for system integrators and trade customers. We provide genuine customer service, based on a thorough understanding of the needs of your customers.
              </p>
            </div>
          </div> 
          
          <div className="img-ctn carousel-airadditions" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="http://airadditions.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[5]} alt="air additions"/>
            <div className="intro-snippet">
              <h2>Air Additions</h2>
              <p>
                Air Additions is the key supply chain for the commercial, industrial and residential HVAC industry across Australia and New Zealand.
              </p>
            </div>
          </div>  
          
          <div className="img-ctn carousel-ses" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://www.sesaustralia.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[6]}  alt="specialist electrical solutions"/>
            <div className="intro-snippet">
              <h2>Specialist Electrical Solutions</h2>
              <p>
                Since its establishment in 1985, Specialist Electrical Solutions (SES) has developed a reputation as an extremely reliable and technically skilled provider of a broad range of electrical products and services.
              </p>
            </div>
          </div> 
          
          <div className="img-ctn carousel-cablemakers" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="http://cablemakers.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[7]}  alt="cable makers"/>
            <div className="intro-snippet">
              <h2>Cable Makers</h2>
              <p>
                Cablemakers bulk cable distributors provide reliable, comprehensive cabling solutions on time and on budget. We service every market including resources, industrial, commercial, and residential. Cablemakers purchases in bulk from reliable, highly specialised cable manufacturers, which ensures we are competitively priced and can get what you need quickly.
              </p>
            </div>
          </div>  
          
          <div className="img-ctn carousel-mms" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://mmssafety.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[8]}  alt="mms safety"/>
            <div className="intro-snippet">
              <h2>MMS Safety</h2>
              <p>
                With a history that spans three decades, MMS Safety has distinguished itself by its unique business approach based on quality products, personalised customer service and reliability.
                MMS are the leaders in the distribution of safety products including test tags, labels & ladders
              </p>
            </div>
          </div>  

          <div className="img-ctn carousel-ila" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="https://www.innovativelighting.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[9]}  alt="innovative lighting"/>
            <div className="intro-snippet">
              <h2>Innovative Lighting Australia</h2>
              <p>
                Innovative Lighting Australia (ILA) is a 100% Australian-owned companyspecialising in lighting solutions for harsh environments, biotope lighting for all animal-related lighting and special project lighting.
              </p>
            </div>
          </div>

          <div className="img-ctn carousel-robert" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a target="_blank" href="http://fergiesbetta.com.au/" rel="noreferrer">
              <div className="clickMe-btn">
                <div className='clickMe-text'>
                  <p>Visit site</p>
                  <FontAwesomeIcon  icon={faPaperPlane} />
                </div>
              </div>
            </a>
            <img className="inner-img" src={PhotoArray[10]} alt="robert ferguson" />
            <div className="intro-snippet">
              <h2>Robert Ferguson</h2>
              <p>
                Fergies Betta is a Tasmanian business that first opened its doors in 1938.

                We specialise in all appliances, kitchen packages and commercial projects, selling only quality brands. TVs, ovens, washing machines, fridges, audio, vacuums, toasters and kettles.
              </p>
            </div>
          </div>

        </div>
      </div>
  </div>
  )
}
