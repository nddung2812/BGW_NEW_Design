import { useState } from 'react'
import'./Sec2MainRight.css'

export const Sec2MainRight = () => {
  const [state1, setState1] = useState("wholesaling-experts")

  const UpdateSupply = () => {
    setState1("supply-chain");
  }

  const UpdateHistory = () => {
    setState1("australian-history");
  }

  const UpdateWholesale = () => {
    setState1("wholesaling-experts");
  }

  return (
    <div className='sec2-main-right'>
        {state1 === "wholesaling-experts" && <div className="sec2-main-right-header">
            The right partner for success
        </div>}
        {state1 === "wholesaling-experts" && <div className="sec2-main-right-body sec2-main-right-body-cover">
   
            <li><span>✔</span>We are a diversified Australian wholesaling 
            business with the financial strength and global 
            sourcing experience to manage materials for the 
            world’s largest projects. Our flat management 
            structure keeps us agile so we can rapidly respond 
            to client and project requirements
            </li>
            <li><span>✔</span>Our experience in major project and materials 
            management is unparalleled. We’ve earned our 
            position as a trusted supplier to some of the world’s 
            largest mineral and energy resource companies 
            by providing quality, cost-effective, and innovative 
            solutions backed by domain knowledge and 
            excellent service. As a result, some of the world’s 
            biggest companies have granted us blanket supply 
            agreements
            </li>
        </div>}

        {state1 === "supply-chain" && <div className="sec2-main-right-header">
            Supply Chain Management
        </div>}

        {state1 === "supply-chain" && <div className="sec2-main-right-body sec2-main-right-body-cover">
   
            <li><span>✔</span>Our teams of sourcing specialists, logisticians, customer service agents and project expediters provide a range of tailored services, from initial planning, through product sourcing, site supply, documentation control, and technical support. This complete supply chain solution will optimise your inventory and help to bring your project in on-time, on-budget, and with minimum material surplus.
            </li>
            <li><span>✔</span>Consolidating a supply agreement with BGW Group ensures standardised quality, pricing and processes across multiple suppliers, subcontractors and sites. Our integrated processes provide full supply chain transparency and global product sourcing provides the best solutions at the best price.
            </li>
        </div>}

        {state1 === "australian-history" && <div className="sec2-main-right-header">
            A Rich Australian History
        </div>}

        {state1 === "australian-history" && <div className="sec2-main-right-body sec2-main-right-body-cover">
   
            <li><span>✔</span>BGW Group started with one family run 
              CNW Electrical store in 1982, but now owns 
              a wide range of complimentary wholesaling 
              businesses operating across Australia and 
              internationally. We are still proudly 100% 
              Australian family owned and operated and 
              the second generation of the Webb family are 
              continuing to build the business. We believe 
              this continued success is largely due to the 
              support we provide to our people, customers, 
              and suppliers.
            </li>
            <li><span>✔</span>We also support the communities we live and 
              work in. Whether it’s providing sponsorships 
              for local sports teams, improving the 
              environment, fundraising for charities, or 
              providing disaster relief, we are there to help 
              when it really counts.
              We proudly export our expertise, designs and 
              products around the world and continue to 
              expand in Asia. 
            </li>
        </div>}


        <div className="sec2-main-right-footer-cta">
            <div className="sec2-right-footer-cta-ctn" onClick={UpdateWholesale}>
              <div className="sec2-right-cta wholesale-experts"></div>
              <div className="sec2-right-cta-text">Wholesaling Experts</div>
            </div>
        
            <div className="sec2-right-footer-cta-ctn" onClick={UpdateSupply}>
              <div className="sec2-right-cta supply-chain"></div>
              <div className="sec2-right-cta-text">Supply Chain Management</div>
            </div>

            <div className="sec2-right-footer-cta-ctn" onClick={UpdateHistory}>
              <div className="sec2-right-cta australian-history"></div>
              <div className="sec2-right-cta-text">Rich Australian History</div>
            </div>
        </div>
    </div>
  )
}
