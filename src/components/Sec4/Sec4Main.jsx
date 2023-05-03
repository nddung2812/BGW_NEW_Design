import './Sec4Main.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,
  faCity, 
  faBuilding, 
  faShield, 
  faFire, 
  faHelmetSafety, 
  faPlugCircleBolt, 
  faWheatAlt,
} from '@fortawesome/free-solid-svg-icons';
import { RightPartner } from './RightPartner'
import { ExperiencesLeft } from './ExperiencesLeft';
import { ExperiencesRight } from './ExperiencesRight';

export const Sec4Main = () => {

    const [divValue, setDivValue] = useState("industrial");
    const [section, setSection] = useState("industries");
    const handleClick = (i) => {
        setDivValue(i)
      };
    const handleChangeIndustries = () => {
        setSection("industries");
    }
    const handleChangeExperiences = () => {
        setSection("experiences")
    }


  return (
    <section className="sec4-main-container">
        <div className="sec4-main-header">
            <div className="sec4-main-header-left" onClick={handleChangeIndustries}>Industries</div>
            <div className="sec4-main-header-right" onClick={handleChangeExperiences}>Expericences</div>
        </div>
        {section === "industries" &&
            <div className="sec4-center-banner">
            <div className="sec4-main-industries-animation">
                <div className="big-circle">
                    <div className="icon-block" onClick={() => handleClick("industrial")}>
                        <FontAwesomeIcon className='icon-img' icon={faIndustry} />
                    </div>
                    <div className="icon-block" onClick={() => handleClick("commercial")}>
                        <FontAwesomeIcon className='icon-img' icon={faBuilding} />
                    </div>
                    <div className="icon-block" onClick={() => handleClick("infrastructure")}>
                        <FontAwesomeIcon className='icon-img' icon={faCity} />
                    </div>
                    <div className="icon-block" onClick={() => handleClick("defence")}>
                        <FontAwesomeIcon className='icon-img' icon={faShield} />
                    </div>
                </div>
                <div className="circle">
                    <div className="icon-block" onClick={() => handleClick("oilGas")}>
                        <FontAwesomeIcon className='icon-img' icon={faFire} />
                    </div>
                    <div className="icon-block" onClick={() => handleClick("agriculture")}>
                        <FontAwesomeIcon className='icon-img' icon={faWheatAlt} />
                    </div>
                    <div className="icon-block" onClick={() => handleClick("mining")}>
                        <FontAwesomeIcon className='icon-img' icon={faHelmetSafety} />
                    </div>
                    <div className="icon-block" onClick={() => handleClick("renewables")}>
                        <FontAwesomeIcon className='icon-img' icon={faPlugCircleBolt} />
                    </div>
                </div>
                <div className="center-logo">
                    <div className="sec4-center-logo-ctn">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/BusinessLogos%2Findustry.png?alt=media&token=7f1d2b7a-87b3-4618-a523-f3d1facb127e" alt='industry' />
                    </div>
                    <h1>Industries</h1>
                </div>
            </div>
            <div className="sec4-right-panel">
                <RightPartner divValue={divValue}/>
                <div className="sec4-right-panel-btn-ctn">
                    <button onClick={handleChangeExperiences}>Our Projects</button>
                </div>
            </div>
            </div>
        }
        {section === "experiences" && 
            <div className="sec4-center-banner experiences">
                <ExperiencesLeft />
                <ExperiencesRight />
            </div>
        }
        
    </section>
  )
}
