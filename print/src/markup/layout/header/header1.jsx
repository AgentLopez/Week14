import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import Logo from "../../../images/logo.png"


class Header1 extends Component{
	

	
	render(){
		return(
			<>
				
				{/* <!-- Header Top ==== --> */}
				<header className="header rs-nav">
					
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img src={Logo} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								
									<Link to="/get-started" className="btn navbar-toggler justify-content-end  ">Get Started</Link>
							
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											
											
											<li className="d-none d-sm-block">
												<Link to="/get-started" className="btn">Get Started</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={Logo} alt=""/></Link>
									</div>


									
									<div className="nav-social-link">
									<Link to="/get-started" className="btn">Get Started</Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
				{/* <!-- Header Top END ==== --> */}
			</>
		);
	}
}

export default Header1;
