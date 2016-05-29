import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import LineItem from './LineItem.jsx';

export default class SalesOrderModal extends React.Component {
	hideModal = () => {
		this.props.hideSalesOrderModal()
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
					       		<LineItem/>
					        </div>

					        <a></a>
						</div>
					</div>
				</Modal.Body>
				
				<Modal.Footer>
					<button onClick={this.hideModal}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}