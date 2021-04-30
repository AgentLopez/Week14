import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg1 from "../../../images/portfolio/portfolio-1/image_1.jpg"
import PortImg2 from "../../../images/portfolio/portfolio-1/image_2.jpg"
import PortImg3 from "../../../images/portfolio/portfolio-1/image_3.jpg"
import PortImg4 from "../../../images/portfolio/portfolio-1/image_4.jpg"

// Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		title: "Agricultural",
		exetitle: "Factory",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		title: "Chemical Research",
		exetitle: "Material",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		title: "Mechanical",
		exetitle: "Research",
	},
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		title: "Agricultural",
		exetitle: "Factory",
	},
]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor" >
			<i className="la la-plus"></i>
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

class ProjectSlider1 extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
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
						<Slider {...settings} className="portfolio-carousel-3 slider-sp2 magnific-image style-3 owl-carousel owl-btn-1 owl-btn-center-lr arrow-none">
							{content.map((item)=>(
								<div className="slider-item">
									<div className="portfolio-box style-1 m-b0">
										<div className="portfolio-media">
											<img src={item.thumb} alt=""/>
										</div>
										<div className="portfolio-info">
											<h4 className="title"><Link to="projects-single-1">{item.title}</Link></h4>
											<span className="exe-title">{item.exetitle}</span>	
											<MagnificAnchor />
										</div>
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

export default ProjectSlider1;
