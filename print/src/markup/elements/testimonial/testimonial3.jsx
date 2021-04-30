import React, { Component } from 'react';
import Slider from "react-slick";

// Images
import TestPic1 from "../../../images/testimonials/pic1.jpg"
import TestPic2 from "../../../images/testimonials/pic2.jpg"
import TestPic3 from "../../../images/testimonials/pic3.jpg"

class Testimonial3 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				<Slider {...settings} className="arrow-none dots-style-2">
					<div className="slider-item">
						<div className="testimonial-bx style3">
							<div className="testimonial-content">
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb radius-xl">
									<img src={TestPic1} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Sonar Moyna</h6>
									<p>Art Director</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style3">
							<div className="testimonial-content">
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb radius-xl">
									<img src={TestPic2} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Sonar Moyna</h6>
									<p>Art Director</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style3">
							<div className="testimonial-content">
								<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb radius-xl">
									<img src={TestPic3} alt=""/>
								</div>
								<div className="testimonial-info radius-xl">
									<h6 className="name">Sonar Moyna</h6>
									<p>Art Director</p>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default Testimonial3;
