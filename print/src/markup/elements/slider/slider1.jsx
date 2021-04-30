import React, { Component } from 'react';
import Slider from "react-slick";

// Images
import Image1 from "../../../images/slider/slide1.jpg"
import Image2 from "../../../images/slider/slide2.jpg"

class Slider1 extends Component{
	
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
				
				<Slider {...settings} className="tt-slider slider-one slider-sp0">
					<div className="slider-item">
						<div className="slider-thumb">
							<img src={Image1} alt=""/>
						</div>
						<div className="slider-content text-white text-center">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title">Best industry</h6>
									<h2 className="title">WE PROVIDE BEST <strong>INDUSTRIAL SERVICES</strong></h2>
									<a className="btn m-lr10" href="/get-in-touch">Get In Touch</a>
									<a className="btn m-lr10 white" href="/contact-1">Contact Us</a>
								</div>
							</div>
						</div>
					</div>			
					<div className="slider-item">
						<div className="slider-thumb">
							<img src={Image2} alt=""/>
						</div>
						<div className="slider-content text-white text-center">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title">Best industry</h6>
									<h2 className="title">WE PROVIDE BEST <strong>INDUSTRIAL SERVICES</strong></h2>
									<a className="btn m-lr10" href="/get-in-touch">Get In Touch</a>
									<a className="btn m-lr10 white" href="/contact-1">Contact Us</a>
								</div>
							</div>
						</div>
					</div>					
				</Slider>
				
			</>
		);
	}
}

export default Slider1;
