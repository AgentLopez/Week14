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

    }


    sendCode = () => {
        fetch(`http://api.imperfectprint.com/verify/${this.state.email}`)
            .then(response => response.json())
            .then(message => {
                this.setState({
                    ...this.state,
                    message: message.message,
                    success: message.success
                })
            })
    }

    verifyCode = () => {
        this.props.history.push(`/status/${this.state.code}`)
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {



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
                                {/* <!-- Shopping cart table --> */}
                                <div className="table-responsive cart-table wow fadeIn" data-wow-delay="0.8s">
                                    <table className="table table-cards align-items-center">

                                        <tbody className="list">

                                   



                                        </tbody>
                                    </table>
                                </div>


                                <div className="card m-b0">
                                    <div className="card-body">
                                        <div className="row justify-content-between align-items-center">
                                        <h5>Thank you for your order. For an update on it's status please enter your email below. You'll recieve a email with a link to get your order status.</h5>
                                        </div>
                                    </div>
                                </div>


                                {/* <!-- Cart information --> */}

                                <div className="card m-b0">
                                    <div className="card-body">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                                                <div className="d-flex align-items-center justify-content-md-end">
                                                    <button className="btn " onClick={this.sendCode}>Get E-Mail</button>

                                                </div>
                                            </div>
                                            <div className="col-md-6 order-md-1">
                                                <span className="h5 mb-0 text-black">Enter Email Associated With Order:</span>
                                                <span className="h4 mb-0 text-black"><input type="email" className="form-control" name="email" onChange={this.handleChange} /></span>

                                                {this.state.message}
                                            </div>
                                        </div>
                                    </div>
                                </div>


{/* {this.state.success ? 
                                <div className="card m-b0">
                                    <div className="card-body">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                                                <div className="d-flex align-items-center justify-content-md-end">
                                                    <button className="btn " onClick={this.verifyCode}>Submit Code</button>

                                                </div>
                                            </div>
                                            <div className="col-md-6 order-md-1">
                                                <span className="h5 mb-0 text-black">Enter 6 Alphanumeric Code:</span>
                                                <span className="h4 mb-0 text-black"><input type="text" className="form-control" name="code" onChange={this.handleChange} /></span>

                                                {this.state.message}
                                            </div>
                                        </div>
                                    </div>
                                </div>
: null}  */}

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