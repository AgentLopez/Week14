import React, { Component } from 'react';

// Images
import Image1 from "../../../images/testimonials/pic2.jpg"

class AboutHead extends Component{
	
	render(){
		return(
			<>
				<div className="about-head-bx wow fadeIn row">
					<div className="col-md-6">
						<div className="about-counter">
							<h5><span className="counter">20</span> + YEAR IN INDUSTRY</h5>
							<h2 className="title">Leading Provider of Industrial Solutions</h2>
						</div>
					</div>
					<div className="col-md-6">
						<div className="about-testimonial">
							<div className="testimonial-content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={Image1} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Thomas Parker</h6>
									<p>CEO And Director</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AboutHead;
