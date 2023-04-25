import { useState } from 'react';
import { BannerLogo } from './BannerLogo';
import "./Sec1Main.css"

export const Sec1Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    const url = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/Corpvideo.mp4?alt=media&token=aa8da7ea-7d78-4f09-94b3-20e11298a01f";
  
    const handleLoadedData = () => {
      setIsLoading(false);
    };

  return (
    <div className="sec1">
    <div className="sec1-banner bg-front-cover">
      <div className="sec1-banner-body">
        <div className="banner-body-left">
            <h1 className="banner-heading">
              BGW GROUP<sup>TM</sup>
            </h1>
            <h3>BGW Group is a diversified Australian family owned distribution and supply chain management company with a portfolio of local and international wholesaling businesses.</h3>
            <button><a>Find out more</a></button>
        </div>
        <div className="banner-left-bottom"></div>
        <div className="banner-body-right">
          <div className="banner-body-right-bottom">
          </div>
        </div>
      </div>
    </div>

    <div className="sec1-banner2">
      <div className="banner-body-right-layer2">
        {isLoading && 
          <div className="corp-video-loader-ctn">
            <div className="corp-video-loader"></div>
            <div className="corp-video-textloader">Loading...</div>
          </div>
        }
          <video
            controls
            autoPlay
            muted
            loop
            onLoadedData={handleLoadedData}
            style={{ display: isLoading ? "none" : "block" }}
          >
            <source src={url} type="video/mp4" />
          </video>
      </div>
    </div>

    <div className="sec1-banner-footer">
      <div className="sec1-bannner-footer-left">
        <h2>Group of Companies</h2>
      </div>
      <div className="sec1-banner-footer-right">
          <BannerLogo />
      </div>
    </div>
  </div>
  )
}
