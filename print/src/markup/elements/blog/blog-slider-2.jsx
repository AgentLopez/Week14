import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import BlogGridPic7 from "../../../images/blog/grid/pic7.jpg"
import BlogGridPic8 from "../../../images/blog/grid/pic8.jpg"
import BlogGridPic9 from "../../../images/blog/grid/pic9.jpg"

class BlogSlider2 extends Component{
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
                items: 3,
            }
        },
    }
	
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
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogGridPic7} alt=""/>
							</div>
							<div className="info-bx">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2019</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								<div className="post-extra">
									<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogGridPic8} alt=""/>
							</div>
							<div className="info-bx">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								<div className="post-extra">
									<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogGridPic9} alt=""/>
							</div>
							<div className="info-bx">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
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

export default BlogSlider2;
