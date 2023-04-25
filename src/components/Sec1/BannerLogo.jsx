import LogoLink2 from '../../JSONData/LogoLinks2';
import './BannerLogo.css'

export const BannerLogo = () => {
  return (
    <div className="sec1-banner-footer-right-logo-ctn">
        {LogoLink2.map((logo,i) => {
            return (
                <div className="sec1-banner-footer-logo-gradient" key={i}>
                    <div className="sec1-banner-footer-logo">
                        <a href={logo.link}>
                            <img src={logo.company}/>
                        </a>
                    </div>
              </div>
            )
        })}
    </div>
  )
}
