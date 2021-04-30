import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import Icon1 from '../../images/icon/contact/icon1.png';
import Icon2 from '../../images/icon/contact/icon2.png';
import Icon3 from '../../images/icon/contact/icon3.png';


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe('pk_test_51IlcevKnypfgt1FwzZyrKZyjwTiAft0838JDEpxQIe7A1J1Q1uXKaidf55mLMCbBIMZoPkcoQPRdTvHj73Ytdg2r00bhxV7jJB')

// Layout


class GetInTouch extends Component {

	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			address: '',
			address2: '',
			choice: '',
			comments: ''
		}
	}


	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	imageChoice = (e) => {

		const formData = new FormData()
		formData.append(
			"myFile",
			e.target.files[0],
			e.target.files[0].name
		)
		axios.post('http://localhost:8000/upload', formData)
			.then(file => {
				this.setState({
					...this.state,
					theFileFromServer: file.data.file
				})
			})
	}



	handleClick = async (e) => {
		// Get Stripe.js instance
		const stripe = await stripePromise;

		// Call your backend to create the Checkout Session
		const response = await fetch('http://localhost:8000/order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				address: this.state.address,
				address2: this.state.address2,
				choice: this.state.choice,
				comments: this.state.comments,
				file: this.state.theFileFromServer
			})
		});

		const session = await response.json();

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	};


	render() {
		return (
			<>
				<Header1 />

				{/* <!-- Content --> */}
				<div className="page-content bg-white">

					<div className="page-banner ovbl-dark parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Start Here</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">


									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="content-block" id="content-area">

						<div className="section-area bg-gray section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-7">
										<div className="heading-bx">
											<h6 className="title-ext m-b0">Covid Vaccination Card</h6>
											<h3 className="title-head m-b0">Order Form</h3>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Fill out the imformation and then you'll be directed to a payment form. Only one Vaccination card can be processed at a time.</p>
										</div>
										<div className="row m-b30">
											<div className="col-md-12">
												<div className=" form-area-box get-in-touch" >
													<div ></div>
													<div className="row placeani">
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">

																	<input name="name" placeholder="Name*" type="text" onChange={this.handleChange} className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">

																	<input name="email" placeholder="Email*" type="email" onChange={this.handleChange} className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">

																	<input name="address" placeholder="Address*" type="text" onChange={this.handleChange} className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">

																	<input name="address2" placeholder="City, State, ZIP Code*" type="text" onChange={this.handleChange} className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="row m-b20">
																<div className="col-md-12 col-lg-12">
																	<h5>Front Graphic Choice</h5>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="radio" name="choice" value = "one" onChange={this.handleChange} className="custom-control-input" id="customControlAutosizing1"/>
																		<label className="custom-control-label" htmlFor="customControlAutosizing1"><img src = "http://localhost:8000/uploads/2de2b5c8-c269-46a7-99c6-f2109100ecd7.png" /></label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="radio" name="choice" value = "two" onChange={this.handleChange} className="custom-control-input" id="customControlAutosizing2" />
																		<label className="custom-control-label" htmlFor="customControlAutosizing2"><img src ="http://localhost:8000/uploads/8171b161-8ee8-4a33-966e-c6f2341398b8.jpg" /></label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="radio" name="choice" value = "three" onChange={this.handleChange} className="custom-control-input" id="customControlAutosizing3" />
																		<label className="custom-control-label" htmlFor="customControlAutosizing3">Material Science</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="radio" name="choice" value = "four" onChange={this.handleChange} className="custom-control-input" id="customControlAutosizing4" />
																		<label className="custom-control-label" htmlFor="customControlAutosizing4">Mechanical Engineering</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="radio" name="choice" value = "five" onChange={this.handleChange} className="custom-control-input" id="customControlAutosizing5" />
																		<label className="custom-control-label" htmlFor="customControlAutosizing5">Oil and Gas</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="radio" name="choice" value = "six" onChange={this.handleChange} className="custom-control-input" id="customControlAutosizing6" />
																		<label className="custom-control-label" htmlFor="customControlAutosizing6">Power and Energy</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">
																	<label>Upload Your Vaccine Card Image:</label>

																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">
																	<input type="file" onChange={this.imageChoice} />
																	<img src={this.state.theFileFromServer} />
																</div>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-group">
																<div className="input-group">

																	<textarea name="Comments" placeholder="Comments*" onChange={this.handleChange} className="form-control"></textarea>
																</div>
															</div>
														</div>
														<div className="col-lg-12">
															<button className="btn" role="link" onClick={this.handleClick}>
																Proceed To Checkout
   															 </button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-5">
										<aside className="sticky-top left-border-1">
											{/* <div className="widget">
												<h6 className="widget-title">Our Inner Pages</h6>
												<ul className="service-list style-2">
													<li><Link to="about-1">About Us <i className="las la-question-circle"></i></Link></li>
													<li><Link to="services-1">Our Services <i className="las la-cog"></i></Link></li>
													<li><Link to="awards">Awards<i className="las la-trophy"></i></Link></li>
													<li><Link to="job-career">Job & Career<i className="las la-user-plus"></i></Link></li>
													<li><Link to="partners">Partners<i className="las la-handshake"></i></Link></li>
													<li><Link to="pricing">Pricing<i className="las la-hand-holding-usd"></i></Link></li>
													<li><Link to="appointment">Appointment<i className="las la-address-card"></i></Link></li>
													<li><Link to="case-study">Case Study<i className="las la-business-time"></i></Link></li>
													<li className="active"><Link to="client">Clients<i className="las la-user-circle"></i></Link></li>
													<li><Link to="faq-1">Faq<i className="las la-quote-left"></i></Link></li>
												</ul>
												<Link to="get-in-touch" className="btn btn-block m-t20">Get In Touch</Link>
											</div> */}
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

export default GetInTouch;