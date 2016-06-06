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
	render(){
		return(
			<Modal bsSize='lg' show={this.props.show}>
				
				<Modal.Header 
					style={{backgroundColor:'#F7F7F7', border:'solid 1px #AFD3D7'}}>
					Sales Order
				</Modal.Header>

				<Modal.Body>

					<ContactFields/>
					
				</Modal.Body>
				
				<Modal.Footer>
					<button className='btn btn-primary' onClick={()=>this.props.hideContactModal()}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

export default ContactModal