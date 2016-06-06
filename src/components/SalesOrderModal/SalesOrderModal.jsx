import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import ContactData from './ContactData.jsx';
import LineItem from './LineItem.jsx';
import TFD from './TFD.jsx';
import store from '../../store';
import * as actionCreators from '../../actions/salesActions';
import {addItem} from '../../actions/salesActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SplitPayment from './SplitPayment.jsx'

class SalesOrderModal extends React.Component {
	constructor(...props){
		super(props);

		this.state = {split:false}

	}
	
	hideModal = () => {
		this.props.hideSalesOrderModal();
		this.setState({split:false})
	}

	renderItemList = () => {

		return this.props.list.map((item) => 
			<LineItem 
				key={item.id}
				id={item.id}
				itemNumber={item.item_number}
				description={item.description}
				price={item.price}
				quantityDelivered={item.quantity_delivered}
				quantityOnHand={item.quantity_on_hand}
				quantityOrdered={item.quantity_ordered}
				/>
		)
	}

	handleSelect = (e) => {

		if(e.target.value==='split') {
			
			this.setState({split:true});
		}
		else {
			this.setState({split:false});
		}

	}

	saveModal = () => {
		
	}

	renderSpinner = () => {
		
	}

	render(){
		return(
			<Modal bsSize='large' show={this.props.show}>
				
				<Modal.Header 
					style={{backgroundColor:'#F7F7F7', border:'solid 1px #AFD3D7'}}>
					<h4>Sales Order</h4>
				</Modal.Header>

				<Modal.Body>

					<ContactData contact={this.props.contact}/>

					<div className="table-responsive">
					    <div className="table">
					        <div className='col-lg-12 table-header no-gutter'style={{backgroundColor:'#eee'}}>
						        
						            <div className='col-lg-1 no-gutter low'><span>Item #</span></div>
						            <div className='col-lg-5 low'><span>Description</span></div>
						            <div className='col-lg-1 low no-gutter'><span>Price</span></div>
						            <div className='col-lg-1 low'><span>Qty Ord</span></div>
						            <div className='col-lg-2 low'><span>Qty Del</span></div>
						            <div className='col-lg-1 low'>
						           
						            <span className='total-header'>Total</span>
						           
						            </div>
						        
					        </div>

					        
					       		{this.renderItemList()}
					     

					        <a onClick={() => {addItem()}}>Add Item</a>

						</div>
						<TFD total={this.props.total} salesTax={this.props.salesTax} addDis={this.props.addDis}/>

						
						
						


						
						
						
						</div>
					
					{this.renderSpinner()}
				</Modal.Body>
				
				<Modal.Footer>
					<button className='btn btn-primary' onClick={this.saveModal}>Save</button>
					<button className='btn btn-success' onClick={this.hideModal}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

function mapStateToProps(state) {
	
  return { list: state.salesReducer.itemList,
  			contact:state.salesReducer.contact,
  			total:state.salesReducer.total,
  			salesTax:state.salesReducer.salesTax,
  			addDis:state.salesReducer.additionalDiscount
  		}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesOrderModal)