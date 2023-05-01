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

export const Sec4Main = () => {

    const [divValue, setDivValue] = useState("industrial");
    const handleClick = (i) => {
        setDivValue(i)
      };
    console.log(divValue)
  return (
    <section className="main-container">
        <div className="main">
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
            <div className="sec4-right-heading-ctn">

            </div>
            <RightPartner divValue={divValue}/>
        </div>
    </section>
  )
}
