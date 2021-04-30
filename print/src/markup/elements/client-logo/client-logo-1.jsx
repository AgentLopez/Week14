import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import PartnerLogo1 from '../../../images/partner/logo1.png';
import PartnerLogo2 from '../../../images/partner/logo2.png';
import PartnerLogo3 from '../../../images/partner/logo3.png';
import PartnerLogo4 from '../../../images/partner/logo4.png';
import PartnerLogo5 from '../../../images/partner/logo5.png';
import PartnerLogo6 from '../../../images/partner/logo6.png';

class ClientLogo1 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 6,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 360,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="dots-style-1 arrow-none">
					<div className="item">
						<div className="client-logo">
							<Link to="#"><img src={PartnerLogo1} alt=""/></Link>
						</div>
					</div>
					<div className="item">
						<div className="client-logo">
							<Link to="#"><img src={PartnerLogo2} alt=""/></Link>
						</div>
					</div>
					<div className="item">
						<div className="client-logo">
							<Link to="#"><img src={PartnerLogo3} alt=""/></Link>
						</div>
					</div>
					<div className="item">
						<div className="client-logo">
							<Link to="#"><img src={PartnerLogo4} alt=""/></Link>
						</div>
					</div>
					<div className="item">
						<div className="client-logo">
							<Link to="#"><img src={PartnerLogo5} alt=""/></Link>
						</div>
					</div>
					<div className="item">
						<div className="client-logo">
							<Link to="#"><img src={PartnerLogo6} alt=""/></Link>
						</div>
					</div>
				</Slider >
			</>
		);
	}
}

export default ClientLogo1;