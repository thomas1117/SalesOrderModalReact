import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import LineItem from './LineItem.jsx';
import store from '../../store';
import * as actionCreators from '../../actions/salesActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class SalesOrderModal extends React.Component {
	constructor(...props){
		super(props);

		this.state = {
			itemList:[{}]
		}
	}
	hideModal = () => {
		this.props.hideSalesOrderModal()
	}

	renderItemList = () => {
		
			
			return <LineItem/>
		
	}
	render(){
		return(<Modal bsSize='large' show={this.props.show}>
				
				<Modal.Header 
					style={{backgroundColor:'#F7F7F7', border:'solid 1px #AFD3D7'}}>
					Sales Order
				</Modal.Header>

				<Modal.Body>

					<div className="table-responsive">
					    <div className="table">
					        <div style={{backgroundColor:'#eee'}}>
						        <ul>
						            <li>Item #</li>
						            <li>Description</li>
						            <li>Price</li>
						            <li>Qty on Hand</li>
						            <li>Qty Ordered</li>
						            <li>Qty Delivered</li>
						            <li>Total</li>
						        </ul>
					        </div>

					        <div id="itemList">
					       		{this.renderItemList()}
					        </div>

					        <a onClick={() => {actionCreators.addItem({})}}>Add Item</a>
						</div>
					</div>
				</Modal.Body>
				
				<Modal.Footer>
					<button onClick={this.hideModal}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

function mapStateToProps(state) {
	
  return { salesReducer: state.salesReducer }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesOrderModal)