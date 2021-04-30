import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PricingTable extends Component{
	render(){
		return(
			<>
				<div className="pricingtable-row">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-3 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>Basic</h2>
											<p>We are just getting started</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">$</span>
											<span className="pricingtable-bx">29</span>
											<span className="pricingtable-type">3 Month</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-check"></i> One Time Fee</li>
										<li><i className="fa fa-check"></i> 3 User</li>
										<li><i className="fa fa-check"></i> Lifetime Availability</li>
										<li><i className="fa fa-check"></i> Non Featured</li>
										<li><i className="fa fa-check"></i> 30 days Listing</li>
										<li><i className="fa fa-check"></i> 24/7 Support</li>
										<li><i className="fa fa-check"></i> Select</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link to="#" className="btn">Get It Now</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner pricingtable-highlight">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>MEDIUM</h2>
											<p>We are just getting started</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">$</span>
											<span className="pricingtable-bx">59</span>
											<span className="pricingtable-type">6 Month</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-check"></i> One Time Fee</li>
										<li><i className="fa fa-check"></i> 3 User</li>
										<li><i className="fa fa-check"></i> Lifetime Availability</li>
										<li><i className="fa fa-check"></i> Non Featured</li>
										<li><i className="fa fa-check"></i> 30 days Listing</li>
										<li><i className="fa fa-check"></i> 24/7 Support</li>
										<li><i className="fa fa-check"></i> Select</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link to="#" className="btn">Get It Now</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>GOLD</h2>
											<p>We are just getting started</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">$</span>
											<span className="pricingtable-bx">79</span>
											<span className="pricingtable-type">9 Month</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-check"></i> One Time Fee</li>
										<li><i className="fa fa-check"></i> 3 User</li>
										<li><i className="fa fa-check"></i> Lifetime Availability</li>
										<li><i className="fa fa-check"></i> Non Featured</li>
										<li><i className="fa fa-check"></i> 30 days Listing</li>
										<li><i className="fa fa-check"></i> 24/7 Support</li>
										<li><i className="fa fa-check"></i> Select</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link to="#" className="btn">Get It Now</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 m-b40">
							<div className="pricingtable-wrapper">
								<div className="pricingtable-inner">
									<div className="pricingtable-main">
										<div className="pricingtable-title">
											<h2>ADVANCED</h2>
											<p>We are just getting started</p>
										</div>
										<div className="pricingtable-price"> 
											<span className="priceing-doller">$</span>
											<span className="pricingtable-bx">99</span>
											<span className="pricingtable-type">12 Month</span>
										</div>
									</div>
									<ul className="pricingtable-features">
										<li><i className="fa fa-check"></i> One Time Fee</li>
										<li><i className="fa fa-check"></i> 3 User</li>
										<li><i className="fa fa-check"></i> Lifetime Availability</li>
										<li><i className="fa fa-check"></i> Non Featured</li>
										<li><i className="fa fa-check"></i> 30 days Listing</li>
										<li><i className="fa fa-check"></i> 24/7 Support</li>
										<li><i className="fa fa-check"></i> Select</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link to="#" className="btn">Get It Now</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default PricingTable;
