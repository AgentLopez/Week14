import React, { Component } from 'react';
import Slider from "react-slick";

class Testimonial4 extends Component{
	
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
						<div className="testimonial-bx style4 text-white">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Sarah-Miller</h6>
									<p>Customer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style4 text-white">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Dan Balan</h6>
									<p>Customer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style4 text-white">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Customer</p>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default Testimonial4;
