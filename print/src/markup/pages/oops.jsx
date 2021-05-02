import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';


class Oops extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-middle parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Oops</h1>
								<div className="breadcrumb-row">
								
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 team-page bg-white">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Issue - Problem</h6>
									<h2 className="title-head m-b0">Something Went Wrong <br/>Please E-Mail Us If You Need Help</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									
									
									
									
								</div>


								<div className="text-center section-sp4">
									<h3 className="title-head m-b20">Try Again?</h3>
									<Link to="get-started" className="btn button-md">Get Started</Link>
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

export default Oops;