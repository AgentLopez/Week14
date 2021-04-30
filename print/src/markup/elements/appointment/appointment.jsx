import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Images
import AboutPic4 from "../../../images/about/pic4.jpg"

class Appointment extends Component{
	
	constructor () {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
	
	render(){
		return(
			<>
				<div className="section-area section-sp1 bg-primary">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12 m-md-b30">
								<div className="video-bx appoint-video">
									<img src={AboutPic4} alt=""/>
									<div className="video-media-bx">
										<Link to="#" onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<form className="ajax-form" action="script/contact.php">
								<div className="ajax-message"></div>
									<div className="heading-bx text-white">
										<h6 className="title-ext m-b0">Appointment</h6>
										<h2 className="title-head m-b0">Get A Free Appointment</h2>
										<div className="ttr-separator sepimg2"></div>
									</div>
									<div className="row placeani appoint-bx1">
										<div className="col-lg-4">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
												</div>
											</div>
										</div>
										<div className="col-lg-4">
											<div className="form-group">
												<div className="input-group input-bx"> 
													<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
												</div>
											</div>
										</div>
										<div className="col-lg-4">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<div className="input-group input-bx">
													<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<button name="submit" type="submit" value="Submit" className="btn-secondry button-md"> Send Message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default Appointment;
