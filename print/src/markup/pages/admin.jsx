import React, { Component } from 'react';


// Images
import Banner1 from "../../images/banner/banner1.jpg"


class Admin extends Component {

	constructor() {
		super()
		this.state = {
			orders: []
		}
	}


	componentDidMount() {
		const token = localStorage.getItem('jsonwebtoken')
		fetch('https://api.imperfectprint.com/admin', {
			method: 'GET', 
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
			.then(response => response.json())
			.then(orders => {
				fetch('https://api.imperfectprint.com/stock', {
					method: 'GET', 
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
					.then(response => response.json())
					.then(supplies => {
						this.setState({
							...this.state,
							orders: orders,
							ver: supplies.ver,
							hor: supplies.hor
						})
					})

			})
	}

	updateStock = () => {
		const token = localStorage.getItem('jsonwebtoken')
		fetch('https://api.imperfectprint.com/stock', {
			method: 'GET', 
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
					.then(response => response.json())
					.then(supplies => {
						this.setState({
							...this.state,
							ver: supplies.ver,
							hor: supplies.hor
						})
					})
	}

	updateOrders = () => {
		const token = localStorage.getItem('jsonwebtoken')
		fetch('https://api.imperfectprint.com/admin', {
			method: 'GET', 
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(response => response.json())
		.then(orders => {
					this.setState({
						...this.state,
						orders: orders,
					})

		})
	}

	markShipped = (id, email) => {
		const token = localStorage.getItem('jsonwebtoken')
		fetch(`https://api.imperfectprint.com/shipped/${id}`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`,
				'email': email
			}
		}) .then(response => {
			this.updateOrders()
		})
	}

	markPaid = (id) => {
		const token = localStorage.getItem('jsonwebtoken')
		fetch(`https://api.imperfectprint.com/paid/${id}`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
	}

	handleChange = (e) => {
        console.log('push')
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

	updateSupply = () => {
		const token = localStorage.getItem('jsonwebtoken')
		fetch(`https://api.imperfectprint.com/stock`, {
			method: 'POST', 
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				hor: this.state.hor,
				ver: this.state.ver
			})
		}) .then(response => {
			this.updateStock()
		})
	}

	render() {

		let listOrders = this.state.orders.map(order => {
			return <tr key={order.id}>
				<th scope="row">
					<div className="media align-items-center">
						<img alt="" src={order.file} />
						<div className="media-body">
							<span className="title">{order.name} -</span>
							<span className="title"> {order.choice}</span>
						</div>
					</div>
				</th>
				<td className="price">
					{order.address}, {order.address2}
				</td>
				<td className="size">
					{order.paid ? <input type="checkbox" className="form-control" style={{ width: "80px" }} defaultChecked/> : <input type="checkbox" className="form-control" onClick={() => this.markPaid(`${order.id}`)} style={{ width: "80px" }}/>}
					
				</td>
				<td>
					{order.email}
				</td>
				<td>
				{order.shipped ? <input type="checkbox" className="form-control" style={{ width: "80px" }} defaultChecked/> : <input type="checkbox" className="form-control" style={{ width: "80px" }}/>}
				</td>
				<td className="total">
					<button className="btn" onClick={() => this.markShipped(`${order.id}, ${order.email}`)}>Mark Shipped</button>
			</td>
				<td className="text-right">

				</td>
			</tr>
		})

		return (
			<>


				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					

					<div className="page-banner ovbl-middle parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
						<div className="container">
							
							<div className="page-banner-entry">
								<h1 className="text-white">Admin/Fullfillment Dashboard</h1>
								<div className="breadcrumb-row">

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
												<th scope="col" className="sort" data-sort="product">Picture - Name - Style</th>
												<th scope="col" className="sort" data-sort="price">Address</th>
												<th scope="col" className="sort" data-sort="size">PAID</th>
												<th scope="col">EMAIL</th>
												<th scope="col">SHIPPED</th>
												<th scope="col" className="sort" data-sort="total">Mark As Shipped</th>
												
											</tr>
										</thead>
										<tbody className="list">



											{listOrders}





										</tbody>
									</table>
								</div>





								{/* <!-- Cart information --> */}
								
								<div className="card m-b0">
									<div className="card-body">
										<div className="row justify-content-between align-items-center">
											<div className="col-md-6 order-md-2 mb-4 mb-md-0">
												<div className="d-flex align-items-center justify-content-md-end">
													<span className="h5 mb-0 text-black">Vertical: </span>
													<span className="h4 mb-0 text-black"><input type="text" className="form-control" name="ver" onChange= {this.handleChange} style={{ width: "80px" }} value={this.state.ver} /></span>
													<span className="h5 mb-0 text-black">Horizontal: </span>
													<span className="h4 mb-0 text-black"><input type="text" className="form-control" name="hor" onChange= {this.handleChange} style={{ width: "80px" }} value={this.state.hor} /></span>
												</div>
											</div>
											<div className="col-md-6 order-md-1">
											<button className="btn " onClick = {this.updateOrders}>Reload Page/Orders</button> <button type="button" className="btn" onClick={this.updateSupply}>Update Supply</button>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>



			</>
		);
	}
}

export default Admin;