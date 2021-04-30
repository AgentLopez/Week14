import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import PortImg19 from "../../../images/portfolio/image_19.jpg"
import PortImg20 from "../../../images/portfolio/image_20.jpg"
import PortImg21 from "../../../images/portfolio/image_21.jpg"
import PortImg22 from "../../../images/portfolio/image_22.jpg"

class ProjectSlider5 extends Component{
	
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
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
				<Slider {...settings} className="portfolio-carousel-2 style-2 owl-carousel owl-btn-1 owl-btn-center-lr arrow-none"> 
					
					<div className="slider-item">
						<div className="portfolio-box style-2 m-b0">
							<div className="portfolio-media">
								<img src={PortImg22} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-2">Agricultural</Link></h4>
								<span className="exe-title">Factory</span>	
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="portfolio-box style-2 m-b0">
							<div className="portfolio-media">
								<img src={PortImg21} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-2">Material Science</Link></h4>
								<span className="exe-title">Agricultural</span>	
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="portfolio-box style-2 m-b0">
							<div className="portfolio-media">
								<img src={PortImg20} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-2">Chemical Research</Link></h4>
								<span className="exe-title">Material</span>	
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="portfolio-box style-2 m-b0">
							<div className="portfolio-media">
								<img src={PortImg19} alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-2">Mechanical</Link></h4>
								<span className="exe-title">Research</span>	
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default ProjectSlider5;
