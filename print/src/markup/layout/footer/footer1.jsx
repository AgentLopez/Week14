import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer1 extends Component{
	render(){
		return(
			<>
				{/* <!-- Footer ==== --> */}
				<footer className="footer-style2">
					


					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
									<p className="m-b0">Copyright © 2021 
									ImperfectPrint.com
									All Rights Reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-right">
									<ul className="link-inline">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/faq">FAQs</Link></li>
										<li><Link to="/status">Order Status</Link></li>
										<li><Link to="/get-started">Get Started</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer1;
