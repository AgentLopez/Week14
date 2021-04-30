import React, { Component } from 'react';

// Elements
import Count from '../../elements/counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/portfolio/portfolio-1/image_1.jpg"
import Portimg7 from "../../../images/portfolio/portfolio-1/image_7.jpg"
import Portimg9 from "../../../images/portfolio/portfolio-1/image_9.jpg"
import Portimg10 from "../../../images/portfolio/portfolio-1/image_10.jpg"

class About2 extends Component{
	
	render(){
		return(
			<>
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
						<div className="heading-bx">
							<h6 className="title-ext m-b0">Welcome to Factro</h6>
							<h2 className="title-head m-b0">About Us Factro</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
						</div>
						{/* <!-- start progress bar item --> */}
						<div className="skillbar-box">
							<h6 className="title">Advanced Technology</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"96%"}}></p>
								<span className="skill-bar-percent">96%</span>
							</div>
						</div>
						<div className="skillbar-box">
							<h6 className="title">Delivery On Time</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"92%"}}></p>
								<span className="skill-bar-percent">92%</span>
							</div>
						</div>
						<div className="skillbar-box">
							<h6 className="title">Certified Engineers</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"79%"}}></p>
								<span className="skill-bar-percent">79%</span>
							</div>
						</div>
						<div className="sign-bx">
							<div className="sign-img">
								<img src={Sign} alt=""/>
							</div>
							<div className="author-bx">
								<h5 className="title">Robert Smith</h5>
								<span>CEO AND Founder</span>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
						<div className="about-img-box2 row sp10">
							<div className="col-sm-6 col-6">
								<img src={Portimg1} className="m-b10" alt=""/>
								<img src={Portimg9} alt=""/>
							</div>
							<div className="col-sm-6 col-6 m-b10 m-t10">
								<img src={Portimg7} className="m-b10" alt=""/>
								<img src={Portimg10} alt=""/>
							</div>
							<div className="about-img-inner">
								<div>
									<h2 className="title"><Count counter={12}/>+</h2>
									<span>YEAR WORK IN INDUSTRY</span>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default About2;
