import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg1 from "../../../images/portfolio/portfolio-3/image_1.jpg"
import PortImg2 from "../../../images/portfolio/portfolio-3/image_2.jpg"
import PortImg3 from "../../../images/portfolio/portfolio-3/image_3.jpg"
import PortImg4 from "../../../images/portfolio/portfolio-3/image_4.jpg"

// Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		title: "Solar Panels",
		exetitle: "Solar Plant",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		title: "Wind Turbines",
		exetitle: "Solar Plant",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		title: "Lower Power Cost",
		exetitle: "Solar Plant",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		title: "Generate Electricity",
		exetitle: "Solar Plant",
	},
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		title: "Solar Panels",
		exetitle: "Solar Plant",
	},
]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor right">
			View Image
		</Link>
	)
}

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#fe5a0e",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#fe5a0e",
		iconColor: "rgba(255, 255, 255, 1)",
		showAutoplayButton: false,
		showDownloadButton: false,
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

class ProjectSlider7 extends Component{
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<SimpleReactLightbox>
					<SRLWrapper options={options}>
						<Slider {...settings} className="slider-sp0 port-slider-7 arrow-none">
							{content.map((item)=>(
								<div className="slider-item">
									<div className="portfolio-box style-2">
										<div className="portfolio-media">
											<img src={item.thumb} alt=""/>
										</div>
										<div className="portfolio-info">
											<h4 className="title"><Link to="projects-single-3">{item.title}</Link></h4>
											<span className="exe-title">{item.exetitle}</span>	
										</div>
										<MagnificAnchor />
									</div>
								</div>
							))}
						</Slider>
					</SRLWrapper>
				</SimpleReactLightbox>
			</>
		);
	}
}

export default ProjectSlider7;
