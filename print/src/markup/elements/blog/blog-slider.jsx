import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import SolarPic1 from "../../../images/blog/grid/solar/pic1.jpg"
import SolarPic2 from "../../../images/blog/grid/solar/pic2.jpg"
import SolarPic3 from "../../../images/blog/grid/solar/pic3.jpg"

class BlogSlider extends Component{
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="arrow-none">
					<div className="slider-item">
						<div className="recent-news bg-white">
							<div className="action-box">
								<Link to="#"><img src={SolarPic2} alt=""/></Link>
							</div>
							<div className="info-bx p-a30">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2019</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket.</Link></h4>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								<div className="post-extra">
									<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news bg-white">
							<div className="action-box">
								<Link to="#"><img src={SolarPic1} alt=""/></Link>
							</div>
							<div className="info-bx p-a30">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2019</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free.</Link></h4>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								<div className="post-extra">
									<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news bg-white">
							<div className="action-box">
								<Link to="#"><img src={SolarPic3} alt=""/></Link>
							</div>
							<div className="info-bx p-a30">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2019</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket.</Link></h4>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								<div className="post-extra">
									<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default BlogSlider;
