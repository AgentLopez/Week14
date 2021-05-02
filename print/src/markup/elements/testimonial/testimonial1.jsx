import React, { Component } from 'react';
import Slider from "react-slick"; 


class Testimonial1 extends Component{
	
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				<Slider {...settings} className="dots-style-1 arrow-none">
					<div className="slider-item">
						<div className="testimonial-bx style1">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Founder, Arch Industry</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style1">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Founder, Arch Industry</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style1">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Founder, Arch Industry</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style1">
							<div className="testimonial-content">
								<p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
							</div>
							<div className="client-info">
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Founder, Arch Industry</p>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default Testimonial1;
