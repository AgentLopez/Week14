import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import {Accordion, Card} from 'react-bootstrap';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';



// Images
import Banner1 from '../../images/banner/banner1.jpg';
import Icon2 from '../../images/icon/contact/icon2.png';
import Icon3 from '../../images/icon/contact/icon3.png';

class Faq2 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-middle parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Frequently Asked Questions</h1>
								<div className="breadcrumb-row">
									
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						<div className="section-area section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-7">
										<div className="heading-bx">
											<h6 className="title-ext m-b0">FIND AN ANSWER</h6>
											<h3 className="title-head m-b0">How to Use Frequently Asked Questions?</h3>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">These are a few questions we anticipated hearing, but we'll update this as we get more questions. If you do not find an answer please e-mail us.</p>
										</div>
										<Accordion className="ttr-accordion gray" defaultActiveKey="0">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#">When will my card arrive?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														We aim to print your card the same day, but may take up to 2 days. Once printed, we travel to the post office and send your card out. USPS first class mail should arrive in 3-7 business days. We will email you when your card has been sent.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#">Why is it called Imperfect Print?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
													I've always wanted to get one of those ID card printers, and today my dream has finally come true. It wasn't quite all it was cracked up to be and I had to buy used and so it's print quality wasn't quite new, but it works and I'm keeping it! So your card may have minor imperfections.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#">Do I have to give you my vaccine card?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														No, if you would like to simply buy the card with nothing printed on the back, just tell me that in the comments, and place the order.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="3">
													<Link to="#">Do you offer a discount if I buy more then one?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														 We are not offering any discounts at this time.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="4">
													<Link to="#">My card has not arrived.</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="4">
													<Card.Body>
														If you have not recieved your card within 7 days of us shipping, please e-mail us and we'll send another one right away.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="5">
													<Link to="#">FAQ to be made</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="5">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="6">
													<Link to="#">FAQ to be made</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="6">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="7">
													<Link to="#">FAQ to be made</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="7">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									</div>
									<div className="col-lg-4 col-md-5">
										<aside className="sticky-top left-border-1">

																			<div className="widget">
												<h6 className="widget-title">Contact Us</h6>
												<ul className="contact-infolist">

													<li>
														<img src={Icon2} alt="" className="mCS_img_loaded" />
														<h6 className="contact-title">Email Address</h6>
														<a href="mailto:order@imperfectprint.com">order@imperfectprint.com</a><br />

													</li>
													<li>
														<img src={Icon3} alt="" className="mCS_img_loaded" />
														<h6 className="contact-title">Address</h6>
														<p>PO Box 11314<br />Bakersfield, CA 93389</p>
													</li>
												</ul>
											</div>
										</aside>
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

export default Faq2;