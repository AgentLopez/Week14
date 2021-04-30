import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Action extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp2 bg-primary parallax">
					<div className="container">
						<div className="heading-bx text-center text-white m-b0">
							<h6 className="title-ext m-b0">Do You Have Any Question</h6>
							<h2 className="title-head m-b0">Need Explore Solution For Business <br/>Growth To Join With Us</h2>
							<div className="ttr-separator sepimg2"></div>
							<div className="m-t20">
								<Link to="get-in-touch" className="btn-secondry">Meet With Us</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Action;
