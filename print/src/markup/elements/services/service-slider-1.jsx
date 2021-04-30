import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

class ServiceSlider1 extends Component{
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
				
		return(
			<>
			
				<Slider {...settings} className="slider-sp0 arrow-none slider-process">
					<div className="slider-item">
						<div className="process-box">
							<h5 className="title"><i className="ti-world"></i> Who We Are</h5>
							<p>There are many variations of passages of Lorem Ipsum available.</p>
							<Link to="#" className="process-btn">View All Service <i className="ti-arrow-right"></i></Link>
						</div>
					</div>
					<div className="slider-item">
						<div className="process-box">
							<h5 className="title"><i className="ti-shield"></i> Our Security</h5>
							<p>There are many variations of passages of Lorem Ipsum available.</p>
							<Link to="#" className="process-btn">View All Service <i className="ti-arrow-right"></i></Link>
						</div>
					</div>
					<div className="slider-item">
						<div className="process-box">
							<h5 className="title"><i className="ti-panel"></i> Our Process</h5>
							<p>There are many variations of passages of Lorem Ipsum available.</p>
							<Link to="#" className="process-btn">View All Service <i className="ti-arrow-right"></i></Link>
						</div>
					</div>
					<div className="slider-item">
						<div className="process-box">
							<h5 className="title"><i className="ti-world"></i> Who We Are</h5>
							<p>There are many variations of passages of Lorem Ipsum available.</p>
							<Link to="#" className="process-btn">View All Service <i className="ti-arrow-right"></i></Link>
						</div>
					</div>
				</Slider>
			
			</>
		);
	}
}

export default ServiceSlider1;
