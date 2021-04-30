import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';

// Images
import PortPic1 from "../../../images/portfolio/portfolio-2/pic1.jpg"
import PortPic2 from "../../../images/portfolio/portfolio-2/pic2.jpg"
import PortPic3 from "../../../images/portfolio/portfolio-2/pic3.jpg"
import PortPic4 from "../../../images/portfolio/portfolio-2/pic4.jpg"

class PortfolioBox2 extends Component{
	render(){
		return(
			<>
				<div className="section-area section-sp3 bg-white">
					<div className="container-fluid">
						<div className="row sp10 portfolio-area">
							<div className="col-lg-6 col-md-12 m-b10">
								<div className="portfolio-box style-2">
									<div className="portfolio-media">
										<img src={PortPic1} alt=""/>
									</div>
									<div className="portfolio-info">
										<h4 className="title"><Link to="projects-single-3">Mechanical Constructions</Link></h4>
										<span className="exe-title">Factory</span>	
									</div>
									<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row sp10">
									<div className="col-lg-6  col-md-12 m-b10">
										<div className="port-info text-white bg-primary">
											<h2>Building It better in concrete.</h2>
											<p>When it comes to your house, don’t mess with the rest, trust the best. Making your vision come true, that is what we do.</p>
											<Link to="#" className="btn-secondry button-md"> Viwe All Services</Link>
										</div>
									</div>
									<div className="col-lg-6  col-md-4 m-b10">
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={PortPic2} alt=""/>
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to="projects-single-3"> Automotive Manifacturing </Link></h4>
												<span className="exe-title">Factory</span>	
											</div>
											<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
										</div>
									</div>
									<div className="col-lg-5 col-md-4 m-b10">
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={PortPic3} alt=""/>
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to="projects-single-3"> Industrial Construction </Link></h4>
												<span className="exe-title">Factory</span>	
											</div>
											<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
										</div>
									</div>
									<div className="col-lg-7 col-md-4 m-b10">
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={PortPic4} alt=""/>
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to="projects-single-3"> Chemical Research Inudstry </Link></h4>
												<span className="exe-title">Factory</span>	
											</div>
											<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default PortfolioBox2;