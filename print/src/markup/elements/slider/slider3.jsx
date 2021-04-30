import React, { Component } from 'react';
import Slider from "react-slick";

// Images
import Image3 from "../../../images/slider/slide3.jpg"
import Image4 from "../../../images/slider/slide4.jpg"

class Slider3 extends Component{
	
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
				
				<Slider {...settings} className="tt-slider slider-sp0 slider-three">
					<div className="slider-item">
						<div className="slider-thumb">
							<img src={Image3} alt=""/>
						</div>
						<div className="slider-content text-left">
							<div className="container">
								<div className="row">
									<div className="col-xl-8 col-lg-9 col-md-10">
										<h2 className="title">Committed to superior quality and results</h2>
										<p>We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</p>
										<a className="btn m-r20" href="/get-in-touch">Get In Touch</a>
										<a className="btn white" href="/contact-1">Contact Us</a>
									</div>
								</div>
							</div>
						</div>
					</div>			
					<div className="slider-item">
						<div className="slider-thumb">
							<img src={Image4} alt=""/>
						</div>
						<div className="slider-content text-left">
							<div className="container">
								<div className="row">
									<div className="col-lg-8">
										<h2 className="title">Committed to superior quality and results</h2>
										<p>We provides always our best services for our clients and always try to achieve our client's trust and satisfaction.</p>
										<a className="btn m-r20" href="/get-in-touch">Get In Touch</a>
										<a className="btn white" href="/contact-1">Contact Us</a>
									</div>
								</div>
							</div>
						</div>
					</div>					
				</Slider>
				
			</>
		);
	}
}

export default Slider3;
