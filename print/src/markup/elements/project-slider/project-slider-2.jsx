import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

class ProjectSlider2 extends Component{
	state= {
        responsive:{
            0: {
                items: 1,
            },
			600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
			1200: {
                items: 4,
            }
        },
    }
	
	render(){
		return(
			<>
				<OwlCarousel className="portfolio-carousel-1 style-1 owl-carousel owl-btn-1 owl-btn-center-lr"
					loop
					nav 
					responsive={this.state.responsive}> 
					
					<div className="item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src="images/portfolio/portfolio-1/image_13.jpg" alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Agricultural</Link></h4>
								<span className="exe-title">Factory</span>	
							</div>
						</div>
					</div>
					<div className="item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src="images/portfolio/portfolio-1/image_14.jpg" alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Material Science</Link></h4>
								<span className="exe-title">Agricultural</span>	
							</div>
						</div>
					</div>
					<div className="item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src="images/portfolio/portfolio-1/image_15.jpg" alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Chemical Research</Link></h4>
								<span className="exe-title">Material</span>	
							</div>
						</div>
					</div>
					<div className="item">
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src="images/portfolio/portfolio-1/image_16.jpg" alt=""/>
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to="projects-single-1">Mechanical</Link></h4>
								<span className="exe-title">Research</span>	
							</div>
						</div>
					</div>
				</OwlCarousel>
			</>
		);
	}
}

export default ProjectSlider2;
