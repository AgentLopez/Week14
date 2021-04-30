import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images


class ServiceSlider1 extends Component{
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
				
		return(
			<>
			
				<Slider {...settings} className="slider-sp0 service-gallery-top arrow-none">
					<div className="slider-item">
						<div className="service-info" >
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Material Science</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-tractor bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" >
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Chemical Research</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-flask bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" >
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Material Science</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-trolley bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" >
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Mechanical Engineering</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-mask bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" >
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Oil and Gas</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-fuel bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="service-info" >
							<div className="container">
								<div className="service-content" data-swiper-parallax-x="500">
									<h3 className="ttr-tilte">Power And Energy</h3>
									<div className="ttr-separator sepimg"></div>
									<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising.</p>
									<Link to="#" className="btn">Read More</Link>
									<i className="flaticon-derrick bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			
			</>
		);
	}
}

export default ServiceSlider1;
