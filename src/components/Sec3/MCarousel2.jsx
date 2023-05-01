import'./MCarousel2.css';
import PhotoArray from '../../Logos/AllBusinessLogos';

export const MCarousel2 = () => {

  return (
    <>
      <div className="mobile-horizon-heading-ctn">
            Our Businesses
      </div>
      <div className='mobile-horizon-slider-ctn'>
          <div className="scroll-section-inner">
              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-cnw">
                  <a target="_blank" href="https://shop.cnw.com.au/" rel="noreferrer" >
                    <img src={PhotoArray[0]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>CNW</h2>
                  <p>
                    CNW Electrical is the largest Australian-owned independent electrical wholesaler. We stock an extensive range of high quality products in over 50 convenient locations across Australia and our local knowledge and comprehensive stock holdings ensure we have what you need, where you need it. 
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-sherriff">
                  <a target="_blank" href="https://shop.sherriff.com.au/" rel="noreferrer">
                    <img src={PhotoArray[2]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Sherriff</h2>
                  <p>
                    Sherriff Electrical provides exceptional customer service and the best electrical products at the best price. We provide personal service and customise our solutions to suit each customer and their needs.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-samios">
                  <a target="_blank" href="https://shop.samios.net.au/" rel="noreferrer">
                    <img src={PhotoArray[1]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Samios</h2>
                  <p>
                    Since 1947 Samios Plumbing Supplies has been an Australian owned and operated wholesale business that provides exceptional service and quality products online and through our national branch network.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-sherriff">
                  <a target="_blank" href="https://wea-asia.com/" rel="noreferrer">
                    <img src={PhotoArray[3]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Wholesale Electric Asia</h2>
                  <p>
                    Wholesale Electric Asia (WEA) delivers Electrical/Instrumentation engineering and supply solutions for Energy, Infrastructure, Defence, Transportation, Mining & Data Center / Industrial projects. Together with our Global Investor Partners, we combine more than 100 years of experience across the globe.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-bgwt">
                  <a target="_blank" href="https://bgwt.com.au/" rel="noreferrer">
                    <img src={PhotoArray[4]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>BGW Technologies</h2>
                  <p>
                    BGW Technologies is a specialist security wholesaler for system integrators and trade customers. We provide genuine customer service, based on a thorough understanding of the needs of your customers.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-airadditions">
                  <a target="_blank" href="http://airadditions.com.au/" rel="noreferrer">
                    <img src={PhotoArray[5]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Air Additions</h2>
                  <p>
                    Air Additions is the key supply chain for the commercial, industrial and residential HVAC industry across Australia and New Zealand.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-airadditions">
                  <a target="_blank" href="https://www.sesaustralia.com.au/" rel="noreferrer">
                    <img src={PhotoArray[6]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Specialist Electrical Solutions</h2>
                  <p>
                    Since its establishment in 1985, Specialist Electrical Solutions (SES) has developed a reputation as an extremely reliable and technically skilled provider of a broad range of electrical products and services.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-cablemakers">
                  <a target="_blank" href="http://cablemakers.com.au/" rel="noreferrer">
                    <img src={PhotoArray[7]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Cable Makers</h2>
                  <p>
                    Cablemakers bulk cable distributors provide reliable, comprehensive cabling solutions on time and on budget. We service every market including resources, industrial, commercial, and residential. Cablemakers purchases in bulk from reliable, highly specialised cable manufacturers, which ensures we are competitively priced and can get what you need quickly.
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-mms">
                  <a target="_blank" href="https://mmssafety.com.au/" rel="noreferrer">
                    <img src={PhotoArray[8]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>MMS Safety</h2>
                  <p>
                    With a history that spans three decades, MMS Safety has distinguished itself by its unique business approach based on quality products, personalised customer service and reliability.
                    MMS are the leaders in the distribution of safety products including test tags, labels & ladders
                  </p>
                </div>
              </div>

              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-ila">
                  <a target="_blank" href="https://www.innovativelighting.com.au/" rel="noreferrer">
                    <img src={PhotoArray[9]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Innovative Lighting Australia</h2>
                  <p>
                    Innovative Lighting Australia (ILA) is a 100% Australian-owned companyspecialising in lighting solutions for harsh environments, biotope lighting for all animal-related lighting and special project lighting.
                  </p>
                </div>
              </div>
              
              <div className="scroll-section">
                <div className="scroll-img-ctn carousel-robert">
                  <a target="_blank" href="http://fergiesbetta.com.au/" rel="noreferrer">
                    <img src={PhotoArray[10]}/>
                  </a>
                </div>
                <div className="scroll-intro-snippet">
                  <h2>Robert Ferguson</h2>
                  <p>
                    Fergies Betta is a Tasmanian business that first opened its doors in 1938.

                    We specialise in all appliances, kitchen packages and commercial projects, selling only quality brands. TVs, ovens, washing machines, fridges, audio, vacuums, toasters and kettles.
                  </p>
                </div>
              </div>
              
          </div>
      </div>
    </>
  )
}