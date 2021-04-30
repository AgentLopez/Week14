import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import PortImg13 from "../../../images/portfolio/portfolio-1/image_13.jpg"
import PortImg14 from "../../../images/portfolio/portfolio-1/image_14.jpg"
import PortImg15 from "../../../images/portfolio/portfolio-1/image_15.jpg"
import PortImg16 from "../../../images/portfolio/portfolio-1/image_16.jpg"

class Testimonial2 extends Component{
	
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
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
				<Slider {...settings} className="portfolio-carousel-1 slider-sp0 style-1 owl-carousel owl-btn-1 owl-btn-center-lr arrow-none">
					<div className="slider-item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src={PortImg13} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Agricultural</Link></h4>
								<span className="exe-title">Factory</span>	
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src={PortImg14} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Material Science</Link></h4>
								<span className="exe-title">Agricultural</span>	
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src={PortImg15} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Chemical Research</Link></h4>
								<span className="exe-title">Material</span>	
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src={PortImg16} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Mechanical</Link></h4>
								<span className="exe-title">Research</span>	
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default Testimonial2;
