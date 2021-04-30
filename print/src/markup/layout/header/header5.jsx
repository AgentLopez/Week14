import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from "../../../images/logo.png"
import ProductImg1 from "../../../images/product/pic1.jpg"
import ProductImg2 from "../../../images/product/pic2.jpg"

class Header5 extends Component{
	
	componentDidMount() {
		
		// Cart Dropdown 
		var cartBtn = document.getElementById("cartBtn")
        var cartDropdown = document.querySelector(".cart-dropdown")
		
        cartBtn.addEventListener('click',function(){
            cartDropdown.classList.toggle("show")
		})
		
		// Search Form Popup
		var searchBtn = document.getElementById("quik-search-btn")
        var searchForm = document.querySelector(".nav-search-bar")
        var closeBtn = document.getElementById("search-remove")
		
        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("show")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("show")
        })

        // Mobile Menu sidebar function
        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }
		
    }
	
	render(){
		return(
			<>
				{/* <!-- Header Top ==== --> */}
				<header className="header rs-nav">
					<div className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container-fluid clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={Logo} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li className="search-btn">
												<button id="quik-search-btn" type="button" className="btn-link"><i className="ti-search"></i></button>
											</li>
											<li>
												<Link to="#" className="cart-btn" id="cartBtn">
													<span>0</span>
												</Link>
												<ul className="dropdown-menu cart-dropdown cart-list">
													<li className="cart-item">
														<div className="media"> 
															<div className="media-left"> 
																<Link to="#"> 
																	<img alt="" className="media-object" src={ProductImg1}/> 
																</Link> 
															</div> 
															<div className="media-body"> 
																<h6 className="title"><Link to="" className="media-heading">There are many variations of passages</Link></h6>
																<span className="price">$25.00</span>
																<span className="item-close">&times;</span>
															</div> 
														</div>
													</li>
													<li className="cart-item">
														<div className="media"> 
															<div className="media-left"> 
																<Link to="#"> 
																	<img alt="" className="media-object" src={ProductImg2}/> 
																</Link> 
															</div> 
															<div className="media-body"> 
																<h6 className="title"><Link to="#" className="media-heading">There are many variations of passages</Link></h6>
																<span className="price">$22.00</span>
																<span className="item-close">&times;</span>
															</div> 
														</div>
													</li>
													<li className="cart-item subtotal">
														<h6 className="title m-a0">Subtotal <span>$47.00</span></h6>
													</li>
													<li className="d-flex">
														<button className="btn button-md flex-fill m-r5">View Cart</button>
														<button className="btn-secondry button-md flex-fill m-l5">Checkout</button>
													</li>
												</ul>
											</li>
											<li className="d-none d-sm-block">
												<Link to="get-in-touch" className="btn">Get In Touch</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Search Box ==== --> */}
								<div className="nav-search-bar">
									<form action="#">
										<input name="search" type="text" className="form-control" placeholder="Type to search"/>
										<span><i className="ti-search"></i></span>
									</form>
									<span id="search-remove"><i className="ti-close"></i></span>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={Logo} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to="#">Home<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="/"><span>Home - Default</span> </Link></li>
												<li><Link to="index-2"><span>Home - Energy & Power</span></Link></li>
												<li><Link to="index-3"><span>Home - Construction</span></Link></li>
												<li><Link to="index-4"><span>Home - Agricultural</span></Link></li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to="#">Pages<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to="about-1"><span>About Us Simple</span></Link></li>
														<li><Link to="about-2"><span>About Us Classic</span></Link></li>
														<li><Link to="about-3"><span>About Us Modern</span></Link></li>
														<li><Link to="awards"><span>Awards</span></Link></li>
														<li><Link to="job-career"><span>Job & Career</span></Link></li>
														<li><Link to="partners"><span>Partners</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to="pricing"><span>Pricing</span></Link></li>
														<li><Link to="appointment"><span>Appointment</span></Link></li>
														<li><Link to="services-1"><span>Services Simple</span></Link></li>
														<li><Link to="services-2"><span>Services Classic</span></Link></li>
														<li><Link to="services-3"><span>Services Modern</span></Link></li>
														<li><Link to="services-details"><span>Services Details</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to="case-study"><span>Case study</span></Link></li>
														<li><Link to="case-details"><span>Case Details</span></Link></li>
														<li><Link to="company-history"><span>Company History</span></Link></li>
														<li><Link to="team"><span>Team</span></Link></li>
														<li><Link to="error-404"><span>404 Page</span></Link></li>
														<li><Link to="client"><span>Clients</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Pages</Link>
													<ul>
														{/* <li><Link to="coming-soon"><span>Coming Soon</span></Link></li> */}
														<li><Link to="faq-1"><span>FAQ's 1</span></Link></li>
														<li><Link to="faq-2"><span>FAQ's 2</span></Link></li>
														<li><Link to="contact-1"><span>Contact Us 1</span></Link></li>
														<li><Link to="contact-2"><span>Contact Us 2</span></Link></li>
														<li><Link to="get-in-touch"><span>Get In Touch</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Solution<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="solution-agricultural-engineering"><span>Agricultural Engineering</span> </Link></li>
														<li><Link to="solution-chemical-research-engineering"><span>Chemical Research Engineering</span></Link></li>
														<li><Link to="solution-material-science-and-engineering"><span>Material Science and Engineering</span></Link></li>
														<li><Link to="solution-mechanical-engineering"><span>Mechanical Engineering</span></Link></li>
														<li><Link to="solution-oil-and-gas"><span>Oil and Gas</span></Link></li>
														<li><Link to="solution-power-and-energy"><span>Power and Energy</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to="#">Projects <i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li><Link to="#">Projects Grid</Link>
													<ul>
														<li><Link to="projects-grid-2"><span>Projects Grid 2</span></Link></li>
														<li><Link to="projects-grid-3"><span>Projects Grid 3</span></Link></li>
														<li><Link to="projects-grid-4"><span>Projects Grid 4</span></Link></li>
														<li><Link to="projects-grid-wide"><span>Projects Grid Wide</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Projects Masonry</Link>
													<ul>
														<li><Link to="projects-masonry-grid-2"><span>Masonry Grid 2</span></Link></li>
														<li><Link to="projects-masonry-grid-3"><span>Masonry Grid 3</span></Link></li>
														<li><Link to="projects-masonry-grid-4"><span>Masonry Grid 4</span></Link></li>
														<li><Link to="projects-masonry-grid-wide"><span>Masonry Grid Wide</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Projects Style</Link>
													<ul>
														<li><Link to="projects-carousel-1"><span>Projects Carousel 1</span></Link></li>
														<li><Link to="projects-carousel-2"><span>Projects Carousel 2</span></Link></li>
														<li><Link to="projects-carousel-3"><span>Projects Carousel 3</span></Link></li>
														<li><Link to="projects-carousel-4"><span>Projects Carousel 4</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Projects Single</Link>
													<ul>
														<li><Link to="projects-single-1"><span>Projects Single 1</span></Link></li>
														<li><Link to="projects-single-2"><span>Projects Single 2</span></Link></li>
														<li><Link to="projects-single-3"><span>Projects Single 3</span></Link></li>
														<li><Link to="projects-single-4"><span>Projects Single 4</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Shop<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="shop"><span>Shop</span> </Link></li>
														<li><Link to="shop-sidebar"><span>Shop Sidebar</span></Link></li>
														<li><Link to="shop-cart"><span>Cart</span></Link></li>
														<li><Link to="shop-checkout"><span>Checkout</span></Link></li>
														<li><Link to="shop-details"><span>Product Details</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Blog <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu left">
												<li><Link to="blog-standard"><span>Blog Standard</span></Link></li>
												<li><Link to="blog-classic"><span>Blog Classic</span></Link></li>
												<li><Link to="blog-classic-sidebar"><span>Blog Classic Sidebar</span></Link></li>
												<li><Link to="blog-list"><span>Blog List Sidebar</span></Link></li>
												<li><Link to="blog-masonry"><span>Masonry</span></Link></li>
												<li><Link to="blog-details-sidebar"><span>Blog Details</span></Link></li>
											</ul>
										</li>
									</ul>
									<div className="nav-social-link">
										<Link to="#"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-google-plus"></i></Link>
										<Link to="#"><i className="fa fa-linkedin"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</div>
				</header>
				{/* <!-- Header Top END ==== --> */}
			</>
		);
	}
}

export default Header5;
