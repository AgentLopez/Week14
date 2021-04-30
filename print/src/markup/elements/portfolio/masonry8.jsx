import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg12 from "../../../images/portfolio/portfolio-1/image_12.jpg"
import PortImg17 from "../../../images/portfolio/portfolio-1/image_17.jpg"
import PortImg18 from "../../../images/portfolio/portfolio-1/image_18.jpg"
import PortImg8 from "../../../images/portfolio/portfolio-1/image_8.jpg"
import PortImg16 from "../../../images/portfolio/portfolio-1/image_16.jpg"
import PortImg15 from "../../../images/portfolio/portfolio-1/image_15.jpg"
import PortImg10 from "../../../images/portfolio/portfolio-1/image_10.jpg"
import PortImg7 from "../../../images/portfolio/portfolio-1/image_7.jpg"
import PortImg1 from "../../../images/portfolio/portfolio-1/image_1.jpg"
import PortImg5 from "../../../images/portfolio/portfolio-1/image_5.jpg"
import PortImg3 from "../../../images/portfolio/portfolio-1/image_3.jpg"
import PortImg4 from "../../../images/portfolio/portfolio-1/image_4.jpg"

// Portfolio Content
const content = [
	{ 
		thumb: PortImg12, 
		LightImg: PortImg12,
		tag: ['Oil & Gas',],
		title: "Agricultural",
		exetitle: "Factory",
	},
	{ 
		thumb: PortImg18,
		LightImg: PortImg18,
		tag: ['Oil & Gas',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Industrial',],
		title: "Chemical Research",
		exetitle: "Material",
	},
	{ 
		thumb: PortImg17,
		LightImg: PortImg17,
		tag: ['Chemical',],
		title: "Mechanical",
		exetitle: "Research",
	},
	{ 
		thumb: PortImg16,
		LightImg: PortImg16,
		tag: ['Oil & Gas',],
		title: "Oil and Gas",
		exetitle: "Mechanical",
	},
	{ 
		thumb: PortImg15,
		LightImg: PortImg15,		
		tag: ['Metallurgy',],
		title: "Power and Energy",
		exetitle: "Oil",
	},
	{ 
		thumb: PortImg10,
		LightImg: PortImg10,		
		tag: ['Industrial',],
		title: "Agricultural",
		exetitle: "Factory",
	},
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,
		tag: ['Metallurgy',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "Agricultural",
		exetitle: "Factory",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['Oil & Gas',],
		title: "Material Science",
		exetitle: "Agricultural",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "Chemical Research",
		exetitle: "Material",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Metallurgy',],
		title: "Oil and Gas",
		exetitle: "Mechanical",
	},
]

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
			
			<div className="feature-filters clearfix center m-b40 style1">
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
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row nosp">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
								<div className="portfolio-box style-3 m-b0">
									<div className="portfolio-media">
										<img src={item.thumb}  alt="" />	
									</div>
									<div className="portfolio-info">
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