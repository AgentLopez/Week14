import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image1 from "../../../images/about/pic11.jpg"
import Image2 from "../../../images/portfolio/portfolio-1/image_7.jpg"

class About1 extends Component{
	render(){
		return(
			<>
				<div className="row">
					<div className="col-md-6">
						<div className="about-img-box3">
							<div className="img1">
								<img src={Image1} alt=""/>
							</div>
							<div className="img2">
								<img src={Image2} alt=""/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="heading-bx m-b20">
							<h6 className="title-ext m-b0">Covid Vaccine Card</h6>
							<h2 className="title-head m-b0">Unoffical Badge</h2>
							<div className="ttr-separator sepimg"></div>
							<h5 className="title-text fw4 m-t5 m-b0">You've got the vaccine and have taken a picture of the vaccine card with your phone, but you arrive to a location and fumble with your phone to fine the picture.</h5>
							<p className="head-px2">Enter Vaccine Card, a convient, durable print of your vaccine card on one side and the word vaccinated on the other, letting others know at a glance you're ready for what's next.</p>
						</div>
						<Link to="get-started" className="btn">Get Started</Link>
					</div>
				</div>
			</>
		);
	}
}

export default About1;
