import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
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

		this.state = {
			split:false
		}

	}
	
	hideModal = () => {
		this.props.hideSalesOrderModal()
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
			this.setState({
				split:true
			});
		}
		else {
			this.setState({
				split:false
			})
		}
	}

	renderSpinner = () => {
		
	}

	render(){
		return(
			<Modal bsSize='large' show={this.props.show}>
				
				<Modal.Header 
					style={{backgroundColor:'#F7F7F7', border:'solid 1px #AFD3D7'}}>
					Sales Order
				</Modal.Header>

				<Modal.Body>

					<div className="table-responsive">
					    <div className="table">
					        <div className='col-lg-12 table-header'style={{backgroundColor:'#eee'}}>
						        
						            <div className='col-lg-2 no-gutter low'><span>Item #</span></div>
						            <div className='col-lg-4 low'><span>Description</span></div>
						            <div className='col-lg-1 low no-gutter'><span>Price</span></div>
						            <div className='col-lg-1 no-gutter low text-center'><span>Qty on Hand</span></div>
						            <div className='col-lg-1 no-gutter low'><span>Qty Ord</span></div>
						            <div className='col-lg-1 no-gutter low'><span>Qty Del</span></div>
						            <div className='col-lg-2 low'>
						            <div className='col-lg-1 low'></div>
						            <div className='col-lg-4 low no-gutter'>
						            <span>Total</span>
						            </div>
						            </div>
						        
					        </div>

					        
					       		{this.renderItemList()}
					     

					        <a onClick={() => {addItem()}}>Add Item</a>

						</div>
						<TFD total={this.props.total} salesTax={this.props.salesTax} addDis={this.props.addDis}/>

						
						<div>
							<div className='col-lg-9 no-gutter'></div>
							<div className='col-lg-3 no-gutter'>
								<select className='select-main' onChange={this.handleSelect}>
									<option value="cash">Cash</option>
									<option value="credit">Credit</option>
									<option value="check">Check</option>
									<option value="split">Split</option>
								</select>
							</div>
						</div>
						


						{this.state.split ? 
							<div>
								<div className='col-lg-9 no-gutter'></div>
								<div className='col-lg-3 no-gutter'>
								<SplitPayment total={this.props.total}/>
								</div>
							</div>
							: null}
						
						
						</div>
					
					{this.renderSpinner()}
				</Modal.Body>
				
				<Modal.Footer>
					<button className='btn btn-primary' onClick={this.saveModal}>Save</button>
					<button className='btn btn-primary' onClick={this.hideModal}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

function mapStateToProps(state) {
	
  return { list: state.salesReducer.itemList,
  			total:state.salesReducer.total,
  			salesTax:state.salesReducer.salesTax,
  			addDis:state.salesReducer.additionalDiscount
  		}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesOrderModal)