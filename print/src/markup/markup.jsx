import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import Index from './pages/index';
import Faq1 from './pages/faq-1';
import GetInTouch from './pages/get-in-touch';
import ShopCart from './pages/admin';
import Team from './pages/thankyou'
import Oops from './pages/oops'
import Login from './pages/login'




class Markup extends Component{
	render(){
		return(
			
			<>
			
				<BrowserRouter basename={'/'}>				
					<Switch>						
						<Route path='/' exact component={Index} />			
						<Route path='/faq' component={Faq1} />		
						<Route path='/get-started' component={GetInTouch} />
						<Route path='/login' component={Login} />						
						<Route path='/admin' component={ShopCart} />
						<Route path='/oops' component={Oops} />	
						<Route path='/thankyou' component={Team} />						
					</Switch>
				</BrowserRouter>				
				<BackToTop />
			
			</>
		);
	}
}

export default Markup;
