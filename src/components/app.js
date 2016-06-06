import React, { Component } from 'react';
import SalesOrderModal from './SalesOrderModal/SalesOrderModal.jsx';
import ContactModal from './ContactForm/ContactModal.jsx'
import store from '../store';
import {openOrder} from '../actions/salesActions';

export default class App extends Component {
	constructor(...props) {
		super(props);

		this.state = {
			salesOrderDisplay:false,
			contactModalDisplay:false,
		}
	}
	showContactModal = () => {
		this.setState({
			contactModalDisplay:true
		});
	}
	showSalesOrderModal = () => {
		this.setState({
			salesOrderDisplay:true
		});

		openOrder();

	}
	hideSalesOrderModal = () => {
		this.setState({
			salesOrderDisplay:false
		})
	}
	hideContactModal = () => {
		this.setState({
			contactModalDisplay:false
		})
	}
  	render() {
    return (
    	<div>

	    	<button className='btn btn-primary' onClick={this.showContactModal}>New Sales Order</button>

	    	<ContactModal
	    		show={this.state.contactModalDisplay} 
	    		hideContactModal={this.hideContactModal}
	    	/>
	    	<SalesOrderModal 
	    	show={this.state.salesOrderDisplay} 
	    	hideSalesOrderModal={this.hideSalesOrderModal}
	    	/>

    	</div>
    );
  }
}
