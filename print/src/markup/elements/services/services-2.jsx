import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services2 extends Component{
	render(){
		return(
			<>
				<div className="section-area section-sp1 bg-white">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 wow fadeInUp m-md-b30" data-wow-delay="0.3s">
								<div className="feature-container feature-bx2">
									<div className="feature-lg text-white m-b20">
										<span className="icon-cell"><i className="ti-world"></i></span> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Who We Are</h4>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
									</div>
									<i className="ti-world bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 wow fadeInUp m-md-b30" data-wow-delay="0.6s">
								<div className="feature-container feature-bx2">
									<div className="feature-lg text-white m-b20">
										<span className="icon-cell"><i className="ti-shield"></i></span> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Our Security</h4>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
									</div>
									<i className="ti-shield bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 wow fadeInUp m-md-b30" data-wow-delay="0.9s">
								<div className="feature-container feature-bx2">
									<div className="feature-lg text-white m-b20">
										<span className="icon-cell"><i className="ti-panel"></i></span> 
									</div>
									<div className="icon-content">
										<h4 className="ttr-tilte">Our Process</h4>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
									</div>
									<i className="ti-panel bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Services2;
