import React, { Component } from 'react';
import Slider from "react-slick"; 

// Images
import TestPic1 from "../../../images/testimonials/pic1.jpg"
import TestPic2 from "../../../images/testimonials/pic2.jpg"
import TestPic3 from "../../../images/testimonials/pic3.jpg"
import TestPic4 from "../../../images/testimonials/pic4.jpg"

class Testimonial2 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="dots-style-1 arrow-none">
					<div className="slider-item">
						<div className="testimonial-bx style2">
							<div className="testimonial-content">
								<h5 className="title">Best Services</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
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
						<div className="testimonial-bx style2">
							<div className="testimonial-content">
								<h5 className="title">Great Support</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestPic3} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Kalina Mollika</h6>
									<p>Client</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2">
							<div className="testimonial-content">
								<h5 className="title">Best product</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestPic4} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Programer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2">
							<div className="testimonial-content">
								<h5 className="title">Best Services</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestPic1} alt=""/>
								</div>
								<div className="testimonial-info">
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

export default Testimonial2;
