import "./Sec2MainLeft.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthOceania,
	faBriefcase,
	faPlane,
	faLocationPin,
	faUserGroup,
	faCertificate,
	faBusinessTime,
	faGlobe,
	faFile,
	faCalendarCheck,
	faTruck,
	faListCheck,
	faPhoneVolume,
	faSearchPlus,
	faCheckDouble,
	faChartColumn,
	faUserLock,
	faCartFlatbedSuitcase,
	faScrewdriverWrench,
	faHandshakeAngle,
	faCheckSquare,
	faChargingStation
} from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCube, Pagination } from "swiper";

export const TwoLeft = () => {

return (
	<div className="sec2-main-left">
		<div className="two-left-ctn">
			<Swiper
				effect={"cube"}
				navigation={true}
				grabCursor={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				cubeEffect={{
				shadow: true,
				slideShadows: true,
				shadowOffset: 80,
				shadowScale: 0.94,
				}}
				pagination={true}
				modules={[EffectCube, Pagination, Navigation, Autoplay]}
				className="cube-swiper"
			>
				<SwiperSlide className="cube-swiper-slide">
				<div className="line-1">
					<div className="block">
						<FontAwesomeIcon icon={faEarthOceania} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">100%</div>
							<div className="hl-text">Australian Owned Since 1938</div>
						</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faGlobe} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
								<div className="hl-top">5</div>
								<div className="hl-text">International Locations</div>
						</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faCertificate} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">Top 10%</div>
							<div className="hl-text">Privately Owned Businesses in QLD</div>
						</div>
					</div>
				</div>
				<div className="line-2">
					<div className="block">
						<FontAwesomeIcon icon={faLocationPin} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">110+</div>
							<div className="hl-text">Australian Locations</div>
						</div>
					</div>
					<div className="block centre-text">
						<h1>B<strong>G</strong>W</h1>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faUserGroup} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">1,100+</div>
							<div className="hl-text">Number of Staff</div>
						</div>
					</div>
				</div>
				<div className="line-3">
					<div className="block">
						<FontAwesomeIcon icon={faPlane} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">3000</div>
							<div className="hl-text">Supplied Domestic and International</div>
						</div>
						</div>
					<div className="block">
						<FontAwesomeIcon icon={faBriefcase} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">Top 150</div>
							<div className="hl-text">Privately Owned Businesses in QLD</div>
						</div>
						</div>
					<div className="block">
						<FontAwesomeIcon icon={faBusinessTime} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-top">1982</div>
							<div className="hl-text">Webb Family Business Established</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide className="cube-swiper-slide">
				<div className="line-1">
					<div className="block">
						<FontAwesomeIcon icon={faFile} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Documentation and Reporting</div>
						</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faCalendarCheck} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
								<div className="hl-text">Planning</div>
						</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faGlobe} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Product Sourcing</div>
						</div>
					</div>
				</div>
				<div className="line-2">
					<div className="block">
						<FontAwesomeIcon icon={faTruck} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Supplier Consolidation</div>
						</div>
					</div>
					<div className="block centre-text-cube2">
						<div className="hl-top-cube2">Project Management</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faListCheck} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Product Supply and Schedule Alignment</div>
						</div>
					</div>
				</div>
				<div className="line-3">
					<div className="block">
						<FontAwesomeIcon icon={faPhoneVolume} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Customer Service</div>
						</div>
						</div>
					<div className="block">
						<FontAwesomeIcon icon={faSearchPlus} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Progress Visibility</div>
						</div>
						</div>
					<div className="block">
						<FontAwesomeIcon icon={faCheckDouble} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Risk and Waste Management</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide className="cube-swiper-slide">
				<div className="line-1">
					<div className="block">
						<FontAwesomeIcon icon={faChartColumn} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Materials Management</div>
						</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faUserLock} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
								<div className="hl-text">Digital Procurement</div>
						</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faCartFlatbedSuitcase} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Assembly and Kitting</div>
						</div>
					</div>
				</div>
				<div className="line-2">
					<div className="block">
						<FontAwesomeIcon icon={faChargingStation} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Cable Management</div>
						</div>
					</div>
					<div className="block centre-text">
						<div className="hl-top-cube2">Supply Chain Management</div>
					</div>
					<div className="block">
						<FontAwesomeIcon icon={faCheckSquare} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Document and Quality Control</div>
						</div>
					</div>
				</div>
				<div className="line-3">
					<div className="block">
						<FontAwesomeIcon icon={	faHandshakeAngle } className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Support</div>
						</div>
						</div>
					<div className="block">
						<FontAwesomeIcon icon={faGlobe} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Product Sourcing</div>
						</div>
						</div>
					<div className="block">
						<FontAwesomeIcon icon={faScrewdriverWrench} className="cube-icon" 
						// color="#d13939" 
						/>
						<div className="text-hl-ctn">
							<div className="hl-text">Maintenance Repair and Operations (MRO)</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
)};
