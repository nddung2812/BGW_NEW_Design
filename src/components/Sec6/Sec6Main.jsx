import { AustralianLocations } from './AustralianLocations';
import { InternationalLocations } from './InternationalLocations';
import './Sec6Main.css';
import { useState } from 'react';
export const Sec6Main = () => {

    const [location, setLocation] = useState("australian");

    const handleChangeIndustries = () => {
        setLocation("australian");
    }
    const handleChangeExperiences = () => {
        setLocation("international")
    }
  return (
    <div className='sec6'>
        <div className="sec6-main-ctn">
            <div className="sec4-main-header">
                <div className="sec4-main-header-left" onClick={handleChangeIndustries}>Australian</div>
                <div className="sec4-main-header-right" onClick={handleChangeExperiences}>International</div>
            </div>
            <div className="sec6-main-body">
                <div className="sec6-main-body-left">
                    <div className="sec6-main-body-left-heading-ctn">
                        <h1>FIND OUR LOCATIONS</h1>
                    </div>
                    <div className="sec6-main-body-left-p">
                        <p>BGW Group is an Australian family owned distribution and supply chain management company with a portfolio of local and international wholesaling businesses.</p>
                    </div>
                    <div className="sec6-main-body-left-btn">
                        {location === "australian" && <a onClick={handleChangeExperiences}>Our Global Partners</a>}
                        {location === "international" && <a onClick={handleChangeIndustries}>Our Australian locations</a>}

                    </div>
                </div>
                <div className="sec6-main-body-right">
                    {location === "australian" && <AustralianLocations />}
                    {location === "international" && <InternationalLocations />}
                </div>
            </div>
        </div>
    </div>
  )
}
