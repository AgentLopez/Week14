import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";  

// Images
import BlogPic1 from "../../../images/blog/grid/agriculture/pic1.jpg"
import BlogPic2 from "../../../images/blog/grid/agriculture/pic2.jpg"
import BlogPic3 from "../../../images/blog/grid/agriculture/pic3.jpg"

class BlogSlider3 extends Component{
	
	render(){
		
		const settings = {
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
				<Slider {...settings} className="blog-carousel arrow-none"> 
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogPic1} alt=""/>
								<div className="event-time">
									<div className="event-date">29</div>
									<div className="event-month">Oct</div>
								</div>
							</div>
							<div className="info-bx bg-white p-a30">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 12 2019</Link></li>
								</ul>
								<h5 className="post-title"><Link to="blog-details-sidebar">Consumption of higly nutritious food.</Link></h5>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogPic2} alt=""/>
								<div className="event-time">
									<div className="event-date">29</div>
									<div className="event-month">Oct</div>
								</div>
							</div>
							<div className="info-bx bg-white p-a30">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
								</ul>
								<h5 className="post-title"><Link to="blog-details-sidebar">15 Best vegetables for your healthy hair.</Link></h5>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogPic3} alt=""/>
								<div className="event-time">
									<div className="event-date">29</div>
									<div className="event-month">Oct</div>
								</div>
							</div>
							<div className="info-bx bg-white p-a30">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 16 2020</Link></li>
								</ul>
								<h5 className="post-title"><Link to="blog-details-sidebar">The amount of freak bread or other fruits.</Link></h5>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default BlogSlider3;
