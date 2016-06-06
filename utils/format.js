"use strict";

import List from './resources';

export function phoneFormat(phone) {
	if(phone===""){
		return phone;
	}
	else {
		return '(' + phone.substr(0, 3) + ')' + ' ' + phone.substr(3, 3) + '-' + phone.substr(6,4);
	}
}

export function validateEmail(email) {
if(email===''){return true}
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return re.test(email);
}

export function validateState(abbrev) {
	
	var isValid = false;

	List.stateSelect.forEach(function(obj){
		if(abbrev===obj.abbreviation){
			isValid=true;
		}
	});

	return isValid;
}

export function validateZip(zip) {
	if(zip===''){
		return true;
	}
	if(zip.length!==5){
		return false;
	}
	else {
		return true;
	}
}

export function validateFirstName(first){
	if(!first){
		return false;
	}
	return true;
}

export function validateForm(obj) {
	var newState = {};


	if(obj.phoneNumber){
		var phoneNumber = obj.phoneNumber.split(/ /)[0].replace(/[^\d]/g, '')
		if(phoneNumber.length!==10){
			newState.validPhone = false;
		}
		else{
			newState.validPhone = true;
		}
	}

	if(obj.email){

		if(!validateEmail(obj.email)) {
		newState.validEmail = false;

		}
		else{
			newState.validEmail = true;
		}
	}


	if(!obj.value) {

		newState.validFirst = false;

	}

	if(obj.state) {

		if(!validateState(obj.state)){

		newState.validState = false;

		}
		else{
			newState.validState = true;
		}
	}

	if(obj.zip) {
		if(!validateZip(obj.zip)){

		newState.validZip = false;

		}
		else {

			newState.validZip = true;
			
		}
	}



	return newState;
}

export function validateInput(kind,value) {
	var newState = {};

	switch(kind) {
		case 'value':

		newState.validFirst = value ? true : false

		return newState;

		break;

		case 'email':

		newState.validEmail = validateEmail(value) ? true : false
		
		return newState;

		break;

		case 'state':

		newState.validState = validateState(value) ? true : false

		return newState;

		break;

		case 'zip':
		newState.validZip = validateZip(value) ? true : false

		return newState;

		case 'phoneNumber':

		var phoneNumber = value.replace(/[^\d]/g, '')
		
	
		newState.validPhone = phoneNumber.length===10 ? true : false

		if(phoneNumber===''){newState.validPhone=true}

		
		
		return newState;
		
	}
}


