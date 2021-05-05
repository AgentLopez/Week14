import React, { Component } from 'react';


// Images
import Banner1 from "../../images/banner/banner1.jpg"
import Footer1 from '../layout/footer/footer1';
import Header1 from '../layout/header/header1';


class Admin extends Component {

	constructor() {
		super()
		this.state = {
			orders: []
		}
	}


	componentDidMount() {
        console.log('component did mount')
        console.log(this.props)
		let code = this.props.match.params.code
        console.log(code)
        fetch(`http://api.imperfectprint.com/status/${code}`)
    .then(response => response.json())
    .then(message => {
        if (message.orders) {
        this.setState({
            ...this.state,
            message: message.message, 
            orders: message.orders
        })
}
else {
    this.props.history.push('/status')
}

    })
	}

	

	

	handleChange = (e) => {
        console.log('push')
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

	

	render() {

		let listOrders = this.state.orders.map(order => {
          let link = `http://api.imperfectprint.com/uploads/card${order.choice}.png`

			return <tr key={order.id}>
				<th scope="row">
					<div className="media align-items-center">
					
						<div className="media-body">
							<span className="title">{order.name} -</span>
							<span className="title"><img alt="" src={link} /></span>
						</div>
					</div>
				</th>
				<td className="price">
					
				</td>
				<td className="size">
					{order.paid ? <input type="checkbox" className="form-control" style={{ width: "80px" }} defaultChecked/> : <input type="checkbox" className="form-control"  style={{ width: "80px" }}/>}
					
				</td>
				<td>
					{order.email}
				</td>
				<td>
				{order.shipped ? <input type="checkbox" className="form-control" style={{ width: "80px" }} defaultChecked/> : <input type="checkbox" className="form-control" style={{ width: "80px" }}/>}
				</td>
				<td className="total">
					
			</td>
				<td className="text-right">

				</td>
			</tr>
		})

		return (
			<>
<Header1 />

				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					

					<div className="page-banner ovbl-middle parallax" style={{ backgroundImage: "url(" + Banner1 + ")" }}>
						<div className="container">
							
							<div className="page-banner-entry">
								<h1 className="text-white">Check Order Status</h1>
								<div className="breadcrumb-row">

								</div>
							</div>
						</div>
					</div>

					<div className="content-block" id="content-area">

						<div className="section-area section-sp2 bg-gray">
							<div className="container">

                            <div className="card m-b0">
                                    <div className="card-body">
                                        <div className="row justify-content-between align-items-center">
                                        <h5>Here is your order information at this time. Please allow up to 24 hours for us to post payment. You will recieve an email when we are shipping your card.</h5>
                                        </div>
                                    </div>
                                </div>


                                
								{/* <!-- Shopping cart table --> */}
								<div className="table-responsive cart-table wow fadeIn" data-wow-delay="0.8s">
									<table className="table table-cards align-items-center">
										<thead>
											<tr>
												<th scope="col" className="sort" data-sort="product">Name - Style</th>
												<th scope="col" className="sort" data-sort="price"></th>
												<th scope="col" className="sort" data-sort="size">PAID</th>
												<th scope="col">EMAIL</th>
												<th scope="col">SHIPPED</th>
												<th scope="col" className="sort" data-sort="total"></th>
												
											</tr>
										</thead>
										<tbody className="list">



											{listOrders}





										</tbody>
									</table>
								</div>





								{/* <!-- Cart information --> */}
								
						
							</div>
						</div>

					</div>

				</div>

<Footer1 />

			</>
		);
	}
}

export default Admin;