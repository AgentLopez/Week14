import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer'
import AuthPath from '../auth'

// Elements
import BackToTop from './elements/back-top';
import Index from './pages/index';
import Faq1 from './pages/faq-1';
import Orderform from './pages/orderform';
import ShopCart from './pages/admin';
import Team from './pages/thankyou'
import Oops from './pages/oops'
import Login from './pages/login'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


class Markup extends Component{
	render(){
		return(
			
			<>
			<Provider store= {store}>
				<BrowserRouter basename={'/'}>				
					<Switch>						
						<Route path='/' exact component={Index} />			
						<Route path='/faq' component={Faq1} />		
						<Route path='/get-started' component={Orderform} />
						<Route path='/login' component={Login} />						
						<Route path='/admin' component={AuthPath(ShopCart)} />
						<Route path='/oops' component={Oops} />	
						<Route path='/thankyou' component={Team} />						
					</Switch>
				</BrowserRouter>				
				<BackToTop />
			</Provider>
			</>
		);
	}
}

export default Markup;
