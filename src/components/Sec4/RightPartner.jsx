import './RightPartner.css';
import LogoLinks from "../../JSONData/LogoLinks"

// eslint-disable-next-line react/prop-types
export const RightPartner = ({divValue}) => {
  return (
    <div id="partner-ctn">
      {LogoLinks.map((item, i) => { 
        return ( 
          divValue === item.name && 
            <div className="partner-businesses" key={i}>
              <div className="partner-business">
                {item.logos.map((logo, i) => {
                  return (
                    <div key={i} className="business-logo-ctn">
                      <a key={i} href={item.links[i]} target="_blank" rel="noreferrer">
                        <img key={i} src={logo} alt="all group companies" />
                      </a>
                    </div>
                  )
                }
              )}
              </div>
            </div>
        )}
      )}
    </div>
  )
}
