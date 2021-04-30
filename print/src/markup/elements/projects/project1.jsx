import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg1 from "../../../images/portfolio/agriculture/image_1.jpg"
import PortImg2 from "../../../images/portfolio/agriculture/image_2.jpg"
import PortImg3 from "../../../images/portfolio/agriculture/image_3.jpg"
import PortImg4 from "../../../images/portfolio/agriculture/image_4.jpg"
import PortImg5 from "../../../images/portfolio/agriculture/image_5.jpg"
import PortImg6 from "../../../images/portfolio/agriculture/image_6.jpg"

// Portfolio Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Eco Product',],
		title: "Eco Product",
		exetitle: "Agricultural",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Fruits',],
		title: "Clear Water for Irrigation",
		exetitle: "Fruits",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Vegetables',],
		title: "Best Products",
		exetitle: "Eco Product",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Agricultural',],
		title: "Spring & Fall Cleanup",
		exetitle: "Fruits",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['Eco Product',],
		title: "Design & Planting",
		exetitle: "Eco Product",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,
		tag: ['Fruits',],
		title: "Growing Fruits and Vegetables",
		exetitle: "Agricultural",
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

const FilterList = ({dataFilter, defaultTag, activeFilter}) => {                                                               
	return (	
		<li className={`${activeFilter ? 'btn active' : 'btn'}` } onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}><span>{dataFilter}</span></Link>
		</li> 
	);
};

function PortfolioContent(){
	const [tag, setTag] = useState('All Cases');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All Cases' ? setFilterdImages(content) : setFilterdImages(content.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
			
			<>
			
			<div className="feature-filters clearfix left m-b40 style1">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="All Cases" 
						defaultTag={setTag} 
						activeFilter={ tag === 'All Cases' ? true : false }	
					/>
					<FilterList 
						dataFilter="Eco Product" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Eco Product' ? true : false }
					/>
					<FilterList 
						dataFilter="Fruits" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Fruits' ? true : false }
					/>
					<FilterList 
						dataFilter="Vegetables"
						defaultTag={setTag} 
						activeFilter={ tag === 'Vegetables' ? true : false }	
					/>
					<FilterList 
						dataFilter="Agricultural"
						defaultTag={setTag} 
						activeFilter={ tag === 'Agricultural' ? true : false }	
					/>
				</ul>
			</div>
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row magnific-image">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
								<div className="portfolio-box style-1">
									<div className="portfolio-media">
										<img src={item.thumb}  alt="" />	
									</div>
									<div className="portfolio-info bg-white">
										<h4 className="title"><Link to={"projects-single-1"}>{item.title}</Link></h4>
										<span className="exe-title">{item.exetitle}</span>
									</div>
								</div>
							</div>
						))}	
					</Masonry>
				</SRLWrapper>
			</SimpleReactLightbox>
		</>
		
	);
}

class PortMasonry extends Component{
	render(){
		return(
			<>
				<PortfolioContent />
			</>
		)
	}
}
export default PortMasonry;