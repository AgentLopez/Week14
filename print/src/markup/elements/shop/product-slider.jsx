import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic2 from "../../../images/product/pic2.jpg"
import ProductPic3 from "../../../images/product/pic3.jpg"
import ProductPic4 from "../../../images/product/pic4.jpg"
import ProductPic5 from "../../../images/product/pic5.jpg"

class Testimonial2 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
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
				<Slider {...settings} className="product-carousel owl-btn-1 dots-pr owl-btn-center-lr dots-style-1 arrow-none">
					<div className="slider-item">
						<div className="item-box">
							<div className="item-media">
								<img src={ProductPic5} alt=""/>
								<ul className="">
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
								</ul>
							</div>
							<div className="item-info">
								<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="item-box">
							<div className="item-media">
								<img src={ProductPic4} alt=""/>
								<ul className="">
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
								</ul>
							</div>
							<div className="item-info">
								<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="item-box">
							<div className="item-media">
								<img src={ProductPic3} alt=""/>
								<ul className="">
									<li>
										<Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Cart">
											<i className="fa fa-shopping-bag"></i>
										</Link>
									</li>
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
								</ul>
							</div>
							<div className="item-info">
								<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="item-box">
							<div className="item-media">
								<img src={ProductPic2} alt=""/>
								<ul className="">
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
								</ul>
							</div>
							<div className="item-info">
								<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="item-box">
							<div className="item-media">
								<img src={ProductPic1} alt=""/>
								<ul className="">
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
									<li><Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
								</ul>
							</div>
							<div className="item-info">
								<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
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
