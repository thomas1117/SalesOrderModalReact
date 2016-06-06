import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {ContactFields} from './ContactFields.jsx';

class ContactModal extends React.Component {
	constructor(...props){
		super(props);

		this.state = {
			split:false
		}

	}
	handleAdd = () => {
		this.props.showSalesOrderModal();
		this.props.hideContactModal();
	}
	render(){
		return(
			<Modal bsSize='lg' show={this.props.show}>
				
				<Modal.Header 
					style={{backgroundColor:'#F7F7F7', border:'solid 1px #AFD3D7'}}>
					Add Contact
				</Modal.Header>

				<Modal.Body>
					<div className='row'>
					<div className='col-lg-2'></div>
					<div className='col-lg-8'>

					<ContactFields contacts={this.props.contacts}/>

					</div>
					<div className='col-lg-2'></div>
					</div>
				</Modal.Body>
				
				<Modal.Footer>
					<button className='btn btn-primary' onClick={()=>this.handleAdd()}>Add</button>
					<button className='btn btn-primary' onClick={()=>this.props.hideContactModal()}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

export default ContactModal