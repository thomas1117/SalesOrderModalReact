import React, { Component } from 'react';
import SalesOrderModal from './SalesOrderModal/SalesOrderModal.jsx';
import ContactModal from './ContactForm/ContactModal.jsx'
import store from '../store';
import {openOrder} from '../actions/salesActions';
import List from '../../utils/resources';

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
    		<h2>An example of a sales order modal with contact form</h2>
	    	<button className='btn btn-primary' onClick={this.showContactModal}>New Sales Order</button>

	    	<ContactModal
	    		show={this.state.contactModalDisplay} 
	    		hideContactModal={this.hideContactModal}
	    		showSalesOrderModal={this.showSalesOrderModal}
	    		contacts={List.List.contacts}
	    	/>
	    	<SalesOrderModal 
	    	show={this.state.salesOrderDisplay} 
	    	hideSalesOrderModal={this.hideSalesOrderModal}
	    	/>

    	</div>
    );
  }
}
