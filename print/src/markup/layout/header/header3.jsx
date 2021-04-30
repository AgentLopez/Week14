import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import Logo from "../../../images/logo.png"
import LogoWhite from "../../../images/logo-white.png"
import ProductImg1 from "../../../images/product/pic1.jpg"
import ProductImg2 from "../../../images/product/pic2.jpg"
import IconImg1 from "../../../images/icon/contact/icon1.png"
import IconImg2 from "../../../images/icon/contact/icon2.png"
import IconImg3 from "../../../images/icon/contact/icon3.png"

class Header3 extends Component{
	
	componentDidMount() {
		
		// Cart Dropdown 
		var cartBtn = document.getElementById("cartBtn")
        var cartDropdown = document.querySelector(".cart-dropdown")
		
        cartBtn.addEventListener('click',function(){
            cartDropdown.classList.toggle("show")
		})
		
		
		// Contact Sidebar
        var asideBtn = document.getElementById("aside-btnshow")
        var contactSidebar = document.querySelector(".contact-sidebar")
        var sidebtnShow = document.getElementById("contact-sidebtnshow")

        asideBtn.addEventListener('click',function(){
            contactSidebar.style.display = "block"
            contactSidebar.classList.add("open")
        })

        sidebtnShow.addEventListener('click',function(){
            contactSidebar.style.display = "none"
            contactSidebar.classList.remove("open")
        })

        // sidebar open/close

        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.header-nav > ul > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            const active = current.classList.contains("open")
            navUl.forEach(el => el.classList.remove('open'));
            //current.classList.add('open');
           
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
				<header className="header rs-nav style-3">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="topbar-left">
									<ul>
										<li><Link to="#"><i className="la la-phone"></i>Call Us (+00) 286 8591</Link></li>
										<li><Link to="#"><i className="la la-clock"></i>Mon to Fri - 9:00am - 6:00pm</Link></li>
										<li><Link to="#"><i className="las la-envelope-open"></i>Support@website.com</Link></li>
									</ul>
								</div>
								<div className="topbar-right">
									<ul>
										<li><Link to="company-history">History</Link></li>
										<li><Link to="blog-standard">News</Link></li>
										<li><Link to="contact-1">Contact Us</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="header-extra-info d-lg-block d-none">
						<div className="container">
							<div className="extra-info-inner">
								<div className="extra-logo">
									<Link to="/"><img src={Logo} alt=""/></Link>
								</div>
								<div className="header-contant-info">
									<ul>
										<li className="br">
											<i className="fa fa-clock-o icon"></i>
											<h5 className="title">Mon to Fri</h5>
											<p>09:00am - 06:00pm </p>
										</li>
										<li>
											<i className="fa fa-envelope icon"></i>
											<h5 className="title">Email Address</h5>
											<p>info@yourdomain.com</p>
										</li>
										<li>
											<Link to="#" className="btn radius-sm">Get In Touch</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo d-lg-none d-table">
									<Link to="/"><img src={LogoWhite} alt=""/></Link>
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
											<li className="search-box">
												<form action="#">
													<input name="search" type="text" className="form-control" placeholder="Search"/>
													<button type="button"><i className="ti-search"></i></button>
												</form>
											</li>
											<li className="aside-box d-none d-lg-block">
												<Link id="aside-btnshow" className="aside-btn contact-sidebtn" to="#">
													<span></span>
													<span></span>
													<span></span>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
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
					</Sticky>
				</header>
				{/* <!-- Header Top END ==== --> */}
				<div className="contact-sidebar content-scroll">
					<div className="inner">
						<div className="logo">
							<img src={Logo} alt=""/>
						</div>
						<h4 className="title">Contact Us For Any Informations</h4>
						<ul className="contact-infolist">
							<li>
								<img src={IconImg1} alt=""/>
								<h6 className="contact-title">Contact Number</h6>
								<p>+001 123 456 790 <br/>(02)  3424 44 00</p>
							</li>
							<li>
								<img src={IconImg2} alt=""/>
								<h6 className="contact-title">Email Address</h6>
								<Link to="#">info@yourdomain.com</Link><br/>
								<Link to="#">example@support.com</Link>
							</li>
							<li>
								<img src={IconImg3} alt=""/>
								<h6 className="contact-title">Address</h6>
								<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
							</li>
						</ul>
						<h4 className="title">Get In Touch</h4>
						<form className="contact-bx ajax-form" action="script/contact.php">
							<div className="ajax-message"></div>
							<div className="row placeani">
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Your Name</label>
											<input name="name" type="text" required className="form-control"/>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group"> 
											<label>Your Email Address</label>
											<input name="email" type="email" className="form-control" required />
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Type Message</label>
											<textarea name="message" rows="4" className="form-control" required ></textarea>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="contact-sidebtnshow" className="contact-sidebtn close">
					<i className="ti-close"></i>
				</div>
			</>
		);
	}
}

export default Header3;
