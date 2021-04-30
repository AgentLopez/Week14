import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import BackBg1 from '../../../images/background/bg1.jpg';
import PortImg4 from '../../../images/portfolio/image_4.jpg';
import PortImg6 from '../../../images/portfolio/image_6.jpg';
import PortImg7 from '../../../images/portfolio/image_7.jpg';
import PortImg8 from '../../../images/portfolio/image_8.jpg';
import PortImg11 from '../../../images/portfolio/image_11.jpg';
import PortImg12 from '../../../images/portfolio/image_12.jpg';

// Portfolio Content
const content = [
	{ 
		thumb: PortImg12, 
		LightImg: PortImg12,
		tag: ['Oil & Gas',],
		title: "GreenEco Park",
		exetitle: "Industry",
	},
	{ 
		thumb: PortImg11,
		LightImg: PortImg11,
		tag: ['Oil & Gas',],
		title: "Burry Bridge",
		exetitle: "Manufacturing",
	},
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Industrial',],
		title: "Rosemary Church",
		exetitle: "oil & Gas",
	},
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,
		tag: ['Chemical',],
		title: "Heidge Museum",
		exetitle: "Enviroment",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,
		tag: ['Oil & Gas',],
		title: "Polley Theater",
		exetitle: "Energy",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,		
		tag: ['Metallurgy',],
		title: "Dorma Mall",
		exetitle: "Industry",
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
			
			<div className="section-area bg-primary section-sp2 ovbl-dark" style={{backgroundImage: "url("+BackBg1+")"}}>
				<div className="container">
					<div className="d-lg-flex align-items-end justify-content-between">
						<div className="heading-bx text-white text-lg-left text-center">
							<h2 className="title-head m-b0">Our Portfolio</h2>
							<div className="ttr-separator sepimg2"></div>
						</div>
						<div className="feature-filters clearfix text-white center right m-b50 style1">
							<ul className="filters" data-toggle="buttons">
								<FilterList 
									dataFilter="All Cases" 
									defaultTag={setTag} 
									activeFilter={ tag === 'All Cases' ? true : false }	
								/>
								<FilterList 
									dataFilter="Oil & Gas" 
									defaultTag={setTag} 
									activeFilter={ tag === 'Oil & Gas' ? true : false }
								/>
								<FilterList 
									dataFilter="Chemical" 
									defaultTag={setTag} 
									activeFilter={ tag === 'Chemical' ? true : false }
								/>
								<FilterList 
									dataFilter="Metallurgy"
									defaultTag={setTag} 
									activeFilter={ tag === 'Metallurgy' ? true : false }	
								/>
								<FilterList 
									dataFilter="Industrial"
									defaultTag={setTag} 
									activeFilter={ tag === 'Industrial' ? true : false }	
								/>
							</ul>
						</div>
					</div>
					<SimpleReactLightbox>
						<SRLWrapper options={options}>
							<Masonry className="row sp4 magnific-image">
								{filteredImages.map((item, index)=>(	
									<div className="action-card col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={item.thumb}  alt="" />	
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to={"projects-single-1"}>{item.title}</Link></h4>
												<span className="exe-title">{item.exetitle}</span>
											</div>
											<MagnificAnchor />
										</div>
									</div>
								))}	
							</Masonry>
						</SRLWrapper>
					</SimpleReactLightbox>
				</div>
			</div>
			
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