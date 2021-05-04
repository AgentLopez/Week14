


import React, { Component } from 'react';

import { connect } from 'react-redux'
import reducer from '../../reducer';



// Layout


class Login extends Component {

	constructor() {
		super()
		this.state = {
			username: '',
			password: ''

		}
	}


	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleClick = async (e) => {
		let username = this.state.username
		let password = this.state.password
		
		fetch('https://api.imperfectprint.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password,
			})

		}).then(response => response.json())
			.then(result => {
				if (result.success) {
					const token = result.token
					localStorage.setItem("jsonwebtoken", token)
					this.props.onLogin()
					this.props.history.push('/admin')
				}
			})

	};


	render() {
		return (
			<>


				{/* <!-- Content --> */}
				<div className="page-content bg-white">



					<div className="content-block" id="content-area">

						<div className="section-area bg-gray section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-7">
										<div className="heading-bx">

											<h3 className="title-head m-b0">Login</h3>
											<div className="ttr-separator sepimg"></div>

										</div>
										<div className="row m-b30">
											<div className="col-md-12">
												<div className=" form-area-box get-in-touch" >
													<div ></div>
													<div className="row placeani">
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">

																	<input name="username" placeholder="Username*" type="text" onChange={this.handleChange} className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">

																	<input name="password" placeholder="Password*" type="password" onChange={this.handleChange} className="form-control" required />
																</div>
															</div>
														</div>

														<div className="col-lg-12">

														</div>

														<div className="col-lg-12">
															<button className="btn" role="link" onClick={this.handleClick}>
																Login
   															 </button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-5">

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

const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: () => dispatch({type: 'LOGIN'})
	}
}

export default connect(null, mapDispatchToProps)(Login);