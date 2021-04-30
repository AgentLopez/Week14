import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NumberBox extends Component{
	render(){
		return(
			<>
				<div className="row">
					<div className="col-md-4">
						<div className="number-box" data-name="01">
							<div className="number-icon">01</div>
							<h5 className="title">Upload Vaccine Pic</h5>
							<p>Upload a cropped picture of just your vaccine card to be printed.</p>
							
						</div>
					</div>
					<div className="col-md-4">
						<div className="number-box" data-name="02">
							<div className="number-icon">02</div>
							<h5 className="title">Choose A Front</h5>
							<p>Four choices, two landscape and two portrait style to choose from.</p>
							
						</div>
					</div>
					<div className="col-md-4">
						<div className="number-box" data-name="03">
							<div className="number-icon">03</div>
							<h5 className="title">Pay</h5>
							<p>Once payment is recieved, we'll print and send out via USPS First Class.</p>
							
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default NumberBox;
