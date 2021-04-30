import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';

import Index from './pages/';

import Faq1 from './pages/faq-1';

import GetInTouch from './pages/get-in-touch';

import ShopCart from './pages/shop-cart';




class Markup extends Component{
	render(){
		return(
			
			<>
			
				<BrowserRouter basename={'/'}>
				
					<Switch>
						
						<Route path='/' exact component={Index} />
			
						<Route path='/faq-1' component={Faq1} />
		
						<Route path='/get-started' component={GetInTouch} />
						
						<Route path='/admin' component={ShopCart} />
						
					</Switch>
				</BrowserRouter>
				
				<BackToTop />
			
			</>
		);
	}
}

export default Markup;
