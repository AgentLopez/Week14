import React, { Component } from 'react';
import CountUp from 'react-countup';

// Elements
import Count from '../../elements/counter/counter-sensor';

class Counter extends Component{
	render(){
		return(
			<>
				<div className="section-area bg-white section-sp1">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext m-b0">Company Stats</h6>
							<h2 className="title-head m-b0">We are here to manage your finance<br/> with experience</h2>
							<div className="ttr-separator sepimg"></div>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.2s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={25}/>
									</div>
									<span className="counter-text">Clients</span>
									<i className="la la-user bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.4s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={35}/>
									</div>
									<span className="counter-text">Awards</span>
									<i className="la la-trophy bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.6s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={180}/>
									</div>
									<span className="counter-text">Projects</span>
									<i className="la la-industry bg-icon"></i>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.8s">
								<div className="counter-style-2">
									<div className="counter-bx">
										<Count counter={120}/>
									</div>
									<span className="counter-text">Media Posts</span>
									<i className="la la-pencil-ruler bg-icon"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Counter;
