import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Card, Header, Button} from 'react-bootstrap';

// Images
import AboutPic7 from "../../../images/about/pic7.jpg"

class MissionVision extends Component{
	render(){
		return(
			<>
				<div className="row">
					<div className="col-md-6 section-sp1 p-r30 p-xs-r15">
						<div className="heading-bx">
							<h6 className="title-ext m-b0">Mission Vision</h6>
							<h2 className="title-head m-b0">Our Strategic Purpose</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
						</div>
						<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									<Link to="#">Our Vision</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Our Mission</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Our Values</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
						<Link to="faq-1" className="btn m-t20 m-sm-b10">Read More</Link>
					</div>
					<div className="col-md-6 p-lr0 ">
						<img src={AboutPic7} className="mvimg" alt=""/>
					</div>
				</div>
			</>
		);
	}
}

export default MissionVision;
