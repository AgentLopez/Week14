import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner4 from "../../images/banner/banner4.jpg"
import ProductPic1 from "../../images/product/pic1.jpg"
import ProductPic2 from "../../images/product/pic2.jpg"
import ProductPic3 from "../../images/product/pic3.jpg"
import ProductPic4 from "../../images/product/pic4.jpg"
import ProductPic5 from "../../images/product/pic5.jpg"

class ShopCart extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner4+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Shop Cart</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Shop Cart</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray">
							<div className="container">
								{/* <!-- Shopping cart table --> */}
								<div className="table-responsive cart-table wow fadeIn" data-wow-delay="0.8s">
								  <table className="table table-cards align-items-center">
									<thead>
										<tr>
											<th scope="col" className="sort" data-sort="product">Product</th>
											<th scope="col" className="sort" data-sort="price">Price</th>
											<th scope="col" className="sort" data-sort="size">Size</th>
											<th scope="col">Quantity</th>
											<th scope="col" className="sort" data-sort="total">Total</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody className="list">
										<tr>
											<th scope="row">
												<div className="media align-items-center">
													<img alt="" src={ProductPic1}/>
													<div className="media-body">
														<span className="title">Home Base</span>
														<span>Size: 42</span>
													</div>
												</div>
											</th>
											<td className="price">
												$129 USD
											</td>
											<td>
												<span className="status">42</span>
											</td>
											<td>
												<input type="text" className="form-control" style={{width: "80px"}} defaultValue="1"/>
											</td>
											<td className="total">
												$129 USD
											</td>
											<td className="text-right">
												{/* <!-- Actions --> */}
												<div className="actions ml-3">
													<Link to="#"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick view">
														<i className="fa fa-external-link"></i>
													</Link>
													<Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash">
														<i className="fa fa-times"></i>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="table-divider"></tr>
										<tr>
											<th scope="row">
												<div className="media align-items-center">
													<img alt="" src={ProductPic2}/>
													<div className="media-body">
														<span className="title">Home Base</span>
														<span>Size: 42</span>
													</div>
												</div>
											</th>
											<td className="price">
												$129 USD
											</td>
											<td>
												<span className="status">42</span>
											</td>
											<td>
												<input type="text" className="form-control" style={{width: "80px"}} defaultValue="1"/>
											</td>
											<td className="total">
												$129 USD
											</td>
											<td className="text-right">
												{/* <!-- Actions --> */}
												<div className="actions ml-3">
													<Link to="#"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick view">
														<i className="fa fa-external-link"></i>
													</Link>
													<Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash">
														<i className="fa fa-times"></i>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="table-divider"></tr>
										<tr>
											<th scope="row">
												<div className="media align-items-center">
													<img alt="" src={ProductPic3}/>
													<div className="media-body">
														<span className="title">Home Base</span>
														<span>Size: 42</span>
													</div>
												</div>
											</th>
											<td className="price">
												$129 USD
											</td>
											<td>
												<span className="status">42</span>
											</td>
											<td>
												<input type="text" className="form-control" style={{width: "80px"}} defaultValue="1"/>
											</td>
											<td className="total">
												$129 USD
											</td>
											<td className="text-right">
												{/* <!-- Actions --> */}
												<div className="actions ml-3">
													<Link to="#"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick view">
														<i className="fa fa-external-link"></i>
													</Link>
													<Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash">
														<i className="fa fa-times"></i>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="table-divider"></tr>
										<tr>
											<th scope="row">
												<div className="media align-items-center">
													<img alt="" src={ProductPic4}/>
													<div className="media-body">
														<span className="title">Home Base</span>
														<span>Size: 42</span>
													</div>
												</div>
											</th>
											<td className="price">
												$129 USD
											</td>
											<td>
												<span className="status">42</span>
											</td>
											<td>
												<input type="text" className="form-control" style={{width: "80px"}} defaultValue="1"/>
											</td>
											<td className="total">
												$129 USD
											</td>
											<td className="text-right">
												{/* <!-- Actions --> */}
												<div className="actions ml-3">
													<Link to="#"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick view">
														<i className="fa fa-external-link"></i>
													</Link>
													<Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash">
														<i className="fa fa-times"></i>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="table-divider"></tr>
										<tr>
											<th scope="row">
												<div className="media align-items-center">
													<img alt="" src={ProductPic5} className=""/>
													<div className="media-body">
														<span className="title">Home Base</span>
														<span>Size: 42</span>
													</div>
												</div>
											</th>
											<td className="price">
												$129 USD
											</td>
											<td>
												<span className="status">42</span>
											</td>
											<td>
												<input type="text" className="form-control" style={{width: "80px"}} defaultValue="1"/>
											</td>
											<td className="total">
												$129 USD
											</td>
											<td className="text-right">
												{/*	<!-- Actions --> */}
												<div className="actions ml-3">
													<Link to="#"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Quick view">
														<i className="fa fa-external-link"></i>
													</Link>
													<Link to="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move to trash">
														<i className="fa fa-times"></i>
													</Link>
												</div>
											</td>
										</tr>
									</tbody>
								  </table>
								</div>
								{/* <!-- Cart information --> */}
								<div className="card m-b0">
									<div className="card-body">
										<div className="row justify-content-between align-items-center">
											<div className="col-md-6 order-md-2 mb-4 mb-md-0">
												<div className="d-flex align-items-center justify-content-md-end">
													<span className="h6 text-muted d-inline-block mr-3 mb-0">Total value:</span>
													<span className="h4 mb-0 text-black">$450.85 USD</span>
												</div>
											</div>
											<div className="col-md-6 order-md-1">
												<button type="button" className="btn">Checkout</button>
												<Link to="shop" className="btn-link m-l15">Return to shop</Link>
											</div>
										</div>
									</div>
								</div>
							  </div>
						</div>
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default ShopCart;