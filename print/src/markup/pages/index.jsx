import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import About from '../elements/about/about1';
import NumberBox from '../elements/number-box/number-box';

// Images
import ServicesPic1 from "../../images/our-services/pic1.jpg"
import ServicesPic2 from "../../images/our-services/pic2.jpg"


class Index extends Component {
	
	render(){
		return (
			<>
			
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">

					<div className="content-block" id="content-area">
								
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<About />
							</div>
						</div>
						
						<div className="section-area section-sp1 bg-white">
							<div className="container">
								<NumberBox />
							</div>
						</div>
						
			
						<div className="section-area bg-white section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-4 col-md-12">
										<div className="heading-bx m-b20 text-center  text-lg-left m-md-b30">
											<h6 className="title-ext m-b0">About Your Card</h6>
											<h2 className="title-head m-b0">It's PVC Plastic</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">These cards are thermal printed making them durable and safe from water and everyday oops, letting you keep your paper record at home where it's safe.</p>
											<Link to="faq" className="btn">F A Q</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-6">
										<div className="service-box text-center m-xs-b30">
											<div className="service-media">
												<img src={ServicesPic1} alt=""/>
												<div className="service-inner">
													<Link to="get-started" className="btn white">Get Started</Link>
												</div>
											</div>
											<div className="service-info">
												<h4 className="title">Imperfect Print</h4>
												<p>We do not have the latest equipment, so your print might have some imperfections.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-6">
										<div className="service-box text-center">
											<div className="service-media">
												<img src={ServicesPic2} alt=""/>
												<div className="service-inner">
													<Link to="get-started" className="btn white">Get Started</Link>
												</div>
											</div>
											<div className="service-info">
												<h4 className="title">Free Shipping</h4>
												<p>Free USPS first class mailing is included.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						

						

			
					</div>
					
				</div>
				
				<Footer1 />
			</>
		);
	}
}

export default Index;