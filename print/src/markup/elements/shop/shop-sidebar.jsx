import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

import GalleryPic1 from "../../../images/gallery/pic1.jpg"
import GalleryPic2 from "../../../images/gallery/pic2.jpg"
import GalleryPic3 from "../../../images/gallery/pic3.jpg"
import GalleryPic4 from "../../../images/gallery/pic4.jpg"
import GalleryPic5 from "../../../images/gallery/pic5.jpg"
import GalleryPic6 from "../../../images/gallery/pic6.jpg"
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic6 from "../../../images/product/pic6.jpg"
import ProductPic9 from "../../../images/product/pic9.jpg"

const content = [
	{
		thumb: GalleryPic1,
	},
	{
		thumb: GalleryPic2,
	},
	{
		thumb: GalleryPic3,
	},
	{
		thumb: GalleryPic4,
	},
	{
		thumb: GalleryPic5,
	},
	{
		thumb: GalleryPic6,
	}
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

function GalleryImg(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<ul className="magnific-image">
						{content.map((item) => (
							<li><img src={item.thumb} alt=""/></li>
						))}
					</ul>
				</SRLWrapper>
			</SimpleReactLightbox>	
		</>
	);
}

class ShopSidebar extends Component{
	render(){
		return(
			<>
				<aside className="side-bar sticky-top shop-categories filter-left filter-off">
					<Link to="#" className="filter-btn close black"><i className="fa fa-close"></i></Link>
					<div className="widget">
						<div className="search-bx style-1">
							<form role="search" method="post">
								<div className="input-group">
									<input name="text" className="form-control" placeholder="Enter your keywords..." type="text"/>
									<span className="input-group-btn">
										<button type="submit" className="fa fa-search text-primary"></button>
									</span> 
								</div>
							</form>
						</div>
					</div>
					<div className="widget">
						<h6 className="widget-title">Top rated products</h6>
						<div className="item-widgets-box">
							<div className="item-widgets-left">
								<img src={ProductPic9} alt=""/>
							</div>
							<div className="item-widgets-body text-black">
								<h6 className="item-title"><Link to="shop">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
						<div className="item-widgets-box">
							<div className="item-widgets-left">
								<img src={ProductPic1} alt=""/>
							</div>
							<div className="item-widgets-body text-black">
								<h6 className="item-title"><Link to="shop">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
						<div className="item-widgets-box">
							<div className="item-widgets-left">
								<img src={ProductPic6} alt=""/>
							</div>
							<div className="item-widgets-body text-black">
								<h6 className="item-title"><Link to="shop">Bottle with Leather Grip</Link></h6>
								<div className="price">
									<span>$49.00</span>
									<del>$59.00</del>
								</div>
							</div>
						</div>
					</div>
					<div className="widget widget_gallery gallery-grid-3">
						<h6 className="widget-title">Our Gallery</h6>
						<GalleryImg />
					</div>
					<div className="widget widget_tag_cloud">
						<h6 className="widget-title">Tags</h6>
						<div className="tagcloud"> 
							<Link to="#">Equipment</Link> 
							<Link to="#">Hand tools</Link> 
							<Link to="#">Hardware</Link> 
							<Link to="#">Power Tools</Link> 
							<Link to="#">Storage</Link> 
							<Link to="#">Welding</Link> 
							<Link to="#">Workwear</Link> 
							<Link to="#">Equipment</Link> 
							<Link to="#">Hand tools</Link> 
							<Link to="#">Hardware</Link> 
							<Link to="#">Power Tools</Link> 
							<Link to="#">Storage</Link> 
							<Link to="#">Welding</Link> 
							<Link to="#">Workwear</Link>  
						</div>
					</div>
				</aside>
			</>
		);
	}
}

export default ShopSidebar;
