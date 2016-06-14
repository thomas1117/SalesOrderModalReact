import React, {Component} from 'react';
import {phoneFormat} from '../../../utils/format';

export default class ContactData extends React.Component {

	render() {
		const {first_name,last_name,address_1,address_2,city,state,zip_code,phone_number} = this.props.contact
		return(
			<div>
				<h4>Contact Details:</h4>
				<p>{first_name + " " + last_name}</p>
				<p>{address_1 + " " + address_2}</p>
				<p>{city + "," + state + " " + zip_code}</p>
				<p>{phoneFormat(phone_number||"")}</p>
			</div>
		)
	}
}

