import { useEffect } from "react"
import "./Preloader.css";
import { preLoaderAnim } from "../../preloaderAnimations/preloaderAnimation";
import bgwLogoImage from "../../assets/bgwLogo.png";
export const Preloader = () => {
  const bgwLogo = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/BusinessLogos%2FbgwLogo.png?alt=media&token=ae2ffe95-8fef-438d-b702-1a1d1c719c5a"

  useEffect(() => {
    preLoaderAnim()
  },[])
  
  
  return (
  <div className="preloader">
      <div className="texts-container">
          {/* <span className="preload-img-ctn"><img src={bgwLogo}/></span> */}
          <span className="preload-img-ctn"><img src={bgwLogoImage}/></span>
          <span>BGW </span>
          <span>GROUP<sup className="preload-trademark">™</sup></span>
      </div>
  </div>
  )
}
