import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Elements
import GalleryPic1 from '../../../images/gallery/pic1.jpg';
import GalleryPic2 from '../../../images/gallery/pic2.jpg';
import GalleryPic3 from '../../../images/gallery/pic3.jpg';
import GalleryPic4 from '../../../images/gallery/pic4.jpg';
import GalleryPic5 from '../../../images/gallery/pic5.jpg';
import GalleryPic6 from '../../../images/gallery/pic6.jpg';

class Services extends Component{
	render(){
		return(
			<>
				<div className="section-area bg-gray section-sp2">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext m-b0">popular Services</h6>
							<h2 className="title-head m-b0">Excellent Service Provide <br/>For Business</h2>
							<div className="ttr-separator sepimg"></div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.2s">
								<div className="feature-container feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to="#" className="icon-cell"><i className="flaticon-tractor"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Agricultural</h4>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="services-details" className="btn-link">Read More</Link>
									</div>
									<div className="bg-img" style={{backgroundImage:"url("+GalleryPic1+")"}}></div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.4s">
								<div className="feature-container feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to="#" className="icon-cell"><i className="flaticon-flask"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Chemical Research</h4>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="services-details" className="btn-link">Read More</Link>
									</div>
									<div className="bg-img" style={{backgroundImage:"url("+GalleryPic2+")"}}></div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.6s">
								<div className="feature-container feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to="#" className="icon-cell"><i className="flaticon-trolley"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Material Science</h4>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="services-details" className="btn-link">Read More</Link>
									</div>
									<div className="bg-img" style={{backgroundImage:"url("+GalleryPic3+")"}}></div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.2s">
								<div className="feature-container feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to="#" className="icon-cell"><i className="flaticon-mask"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Mechanical</h4>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="services-details" className="btn-link">Read More</Link>
									</div>
									<div className="bg-img" style={{backgroundImage:"url("+GalleryPic4+")"}}></div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.4s">
								<div className="feature-container feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to="#" className="icon-cell"><i className="flaticon-fuel"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Oil and Gas</h4>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="services-details" className="btn-link">Read More</Link>
									</div>
									<div className="bg-img" style={{backgroundImage:"url("+GalleryPic5+")"}}></div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeIn" data-wow-delay="0.6s">
								<div className="feature-container feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to="#" className="icon-cell"><i className="flaticon-derrick"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Power and Energy</h4>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<a href="services-details.html" className="btn-link">Read More</a>
									</div>
									<div className="bg-img" style={{backgroundImage: "url("+GalleryPic6+")" }}></div>
								</div>
							</div>
							<div className="col-lg-12 text-center m-t20 m-sm-t0" data-wow-delay="0.6s">
								<Link to="services-1" className="btn">View All Service</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Services;
