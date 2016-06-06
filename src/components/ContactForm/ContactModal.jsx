import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {ContactFields} from './ContactFields.jsx';
import {addContact} from '../../actions/salesActions';
import {validateForm} from '../../../utils/format';

class ContactModal extends React.Component {
	constructor(...props){
		super(props);

		this.state = {
			split:false
		}

	}
	handleAdd = () => {
		var obj = this.refs.contact.state;

		let data = {
			first_name:obj.value,
			last_name:obj.lastName,
			address_1:obj.address1,
			address_2:obj.address2,
			email:obj.email,
			phone_number:(obj.phoneNumber).replace(/[^\d]/g, ''),
			city:obj.city,
			state:obj.state,
			zip_code:obj.zip
		};

		this.setState(validateForm(obj));
		var validObj = validateForm(obj);



		for(var key in validObj){
		    if(validObj[key]===false){
		        return;
		    }
		}

		addContact(data);
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

					<ContactFields ref='contact' contacts={this.props.contacts}/>

					</div>
					<div className='col-lg-2'></div>
					</div>
				</Modal.Body>
				
				<Modal.Footer>
					<button className='btn btn-primary' onClick={()=>this.refs.contact.clear()}>Clear</button>
					<button className='btn btn-primary' onClick={()=>this.handleAdd()}>Add</button>
					<button className='btn btn-primary' onClick={()=>this.props.hideContactModal()}>Close</button>
				</Modal.Footer>
			</Modal>)
	}
}

export default ContactModal