import React, { Component } from 'react';
import SalesOrderModal from './SalesOrderModal/SalesOrderModal.jsx';
import store from '../store';
export default class App extends Component {
	constructor(...props) {
		super(props);

		this.state = {
			salesOrderDisplay:false
		}
	}
	showSalesOrderModal = () => {
		this.setState({
			salesOrderDisplay:true
		})
	}
	hideSalesOrderModal = () => {
		this.setState({
			salesOrderDisplay:false
		})
	}
  	render() {
    return (
    	<div>
    	<button onClick={this.showSalesOrderModal}>New Sales Order</button>
    	<SalesOrderModal show={this.state.salesOrderDisplay} hideSalesOrderModal={this.hideSalesOrderModal} state={store.getState()}/>
    	</div>
    );
  }
}
