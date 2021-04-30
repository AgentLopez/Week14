import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About3 extends Component{
	render(){
		return(
			<>
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeIn"}}>
						<div className="heading-bx m-b20">
							<h6 className="title-ext m-b0">Welcome to Factro</h6>
							<h2 className="title-head m-b0">About Us Factro</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.Our purpose follow leading design, engineering and industrial.</p>
						</div>
						{/* <!-- start progress bar item --> */}
						<Link to="get-in-touch" className="btn">Get In Touch</Link>
					</div>
					<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeIn"}}>
						<div className="skillbar-box">
							<h6 className="title">ADVANCED TECHNOLOGY</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"96%"}}></p>
								<span className="skill-bar-percent">96%</span>
							</div>
						</div>
						<div className="skillbar-box">
							<h6 className="title">DELIVERY ON TIME</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"92%"}}></p>
								<span className="skill-bar-percent">92%</span>
							</div>
						</div>
						<div className="skillbar-box">
							<h6 className="title">CERTIFIED ENGINEERS</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"79%"}}></p>
								<span className="skill-bar-percent">79%</span>
							</div>
						</div>
						<div className="skillbar-box m-sm-b0">
							<h6 className="title">6 years Experience</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"75%"}}></p>
								<span className="skill-bar-percent">75%</span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default About3;
