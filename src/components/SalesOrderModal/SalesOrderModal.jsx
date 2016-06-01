import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import LineItem from './LineItem.jsx';
import store from '../../store';
import * as actionCreators from '../../actions/salesActions';
import {addItem} from '../../actions/salesActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class SalesOrderModal extends React.Component {
	constructor(...props){
		super(props);

	}
	
	hideModal = () => {
		this.props.hideSalesOrderModal()
	}

	renderItemList = () => {
		
		return store.getState().salesReducer.itemList.map((item) => <LineItem id={item.id}/>);
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
					        <div className='col-lg-12 no-gutter'style={{backgroundColor:'#eee'}}>
						        
						            <div className='col-lg-2 no-gutter'>Item #</div>
						            <div className='col-lg-4 no-gutter'>Description</div>
						            <div className='col-lg-1 no-gutter'>Price</div>
						            <div className='col-lg-1 no-gutter'>Qty on Hand</div>
						            <div className='col-lg-1 no-gutter'>Qty Ordered</div>
						            <div className='col-lg-1 no-gutter'>Qty Delivered</div>
						            <div className='col-lg-2 no-gutter'>Total</div>
						        
					        </div>

					        <div id="itemList">
					       		{this.renderItemList()}
					        </div>

					        <a onClick={() => {addItem()}}>Add Item</a>
						</div>
					</div>
				</Modal.Body>
				
				<Modal.Footer>
					<button className='btn btn-primary' onClick={this.hideModal}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

function mapStateToProps(state) {
	console.log('the state ',state)
  return { list: state.salesReducer.itemList }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesOrderModal)