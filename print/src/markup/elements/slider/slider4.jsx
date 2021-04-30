import React, { Component } from 'react';
import Slider from "react-slick";

// Images
import Image7 from "../../../images/slider/slide7.jpg"
import Image8 from "../../../images/slider/slide8.jpg"
import Tractor from "../../../images/icon/tractor.png"

class Slider4 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				
				<Slider {...settings} className="tt-slider slider-sp0 slider-four">
					<div className="slider-item">
						<div className="slider-thumb">
							<img src={Image7} alt=""/>
						</div>
						<div className="slider-content text-center text-white">
							<div className="container">
								<div className="content-inner">
									<img className="icon-cell" src={Tractor} alt=""/>
									<h2 className="title">ORGANIC & AGRICULTURE</h2>
									<h6 className="sub-title">EXCELLENT SERVICE PROVIDE FOR BUSINESS</h6>
									<a className="btn outline white" href="/get-in-touch">Get In Touch</a>
								</div>
							</div>
						</div>
					</div>			
					<div className="slider-item">
						<div className="slider-thumb">
							<img src={Image8} alt=""/>
						</div>
						<div className="slider-content text-center text-white">
							<div className="container">
								<div className="content-inner">
									<img className="icon-cell" src={Tractor} alt=""/>
									<h2 className="title">ORGANIC & AGRICULTURE</h2>
									<h6 className="sub-title">EXCELLENT SERVICE PROVIDE FOR BUSINESS</h6>
									<a className="btn outline white" href="/get-in-touch">Get In Touch</a>
								</div>
							</div>
						</div>
					</div>					
				</Slider>
				
			</>
		);
	}
}

export default Slider4;