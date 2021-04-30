import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import IconPdf from '../../../images/icon/pdf.png';
import IconDoc from '../../../images/icon/doc.png';
import AboutPic3 from '../../../images/about/pic3.jpg';
import HeadPhones from '../../../images/icon/headphones.png';

class SolutionSidebar extends Component{
	render(){
		return(
			<>
				<aside className="sticky-top">
					<div className="widget">
						<ul className="service-list">
							<li className="active">
								<Link to="solution-agricultural-engineering"><span>Agricultural Engineering</span>
								<i className="fa fa-angle-right"></i> </Link>
							</li>
							<li>
								<Link to="solution-chemical-research-engineering"><span>Chemical Research Engineering</span>
								<i className="fa fa-angle-right"></i></Link>
							</li>
							<li><Link to="solution-material-science-and-engineering"><span>Material Science and Engineering</span>
								<i className="fa fa-angle-right"></i></Link>
							</li>
							<li>
								<Link to="solution-mechanical-engineering"><span>Mechanical Engineering</span>
									<i className="fa fa-angle-right"></i>
								</Link>
							</li>
							<li>
								<Link to="solution-oil-and-gas"><span>Oil and Gas</span>
								<i className="fa fa-angle-right"></i></Link>
							</li>
							<li>
								<Link to="solution-power-and-energy"><span>Power and Energy</span>
								<i className="fa fa-angle-right"></i></Link>
							</li>
						</ul>
					</div>
					<div className="widget">
						<div className="brochure-bx">
							<h5 className="title-head">Download</h5>
							<Link to="#" className="download-link">
								<img src={IconPdf} alt=""/>
								<h5 className="title">Download our Brochures</h5>
								<span>Download</span>
							</Link>
							<Link to="#" className="download-link">
								<img src={IconDoc} alt=""/>
								<h5 className="title">Our Company Details</h5>
								<span>Download</span>
							</Link>
						</div>
					</div>
					<div className="widget">
						<div className="help-bx">
							<div className="media">
								<img src={AboutPic3} alt=""/>
							</div>
							<div className="info text-white">
								<img src={HeadPhones} alt=""/>
								<h5 className="title">How Can We Help</h5>
								<p>If you need any helps, please free to contact us.</p>
								<a href="contact-1.html" className="btn-secondry">Contact Us</a>
							</div>
						</div>
					</div>
				</aside>
			</>
		);
	}
}

export default SolutionSidebar;
