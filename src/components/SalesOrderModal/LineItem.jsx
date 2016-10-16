import React,{Component} from 'react';
import * as actionCreators from '../../actions/salesActions';
import store from '../../store';
import {deleteItem,updateItem} from '../../actions/salesActions';
import {Suggest} from './SelectInput.jsx';
import {DescriptionInput} from './DescriptionInput.jsx';


export default class LineItem extends React.Component {
	constructor(...props){
		super(props);

		this.state = {
			item_number:null,
			description:null,
			price:null,
			quantity_ordered:null,
			quantity_delivered:null
		}
	}
	getFields = (obj) => {

		this.setState(obj)

		updateItem({data:obj,id:this.props.id});

		this.refs.numId.setValueState(obj.item_number);
		this.refs.description.setValueState(obj.description)
	}
	handleFields = (obj) => {
		let nextState = {...this.state};
		
		if(obj.kind==='quantity_ordered'){nextState[obj.kind] = obj.value.slice(0,3)}


		else {
		nextState[obj.kind] = obj.value;
		}
		
		
		this.setState(nextState);

		updateItem({data:nextState,id:this.props.id})


	}

	render() {
		const {quantity_ordered,description,price} = this.state;
		
		return(
			<form>
			<div className='col-xs-12 line-item-contain no-gutter'>
				<div>	        
		            <div className='col-lg-1 col-sm-1 no-gutter'>
		            	<Suggest ref='numId' getFields={this.getFields} handleFields={this.handleFields}/>
		            </div>
		            <div className='col-lg-5 col-sm-5'>
		            	
		            	<DescriptionInput
		            		ref='description' 
							getFields={this.getFields} 
							handleFields={this.handleFields}/>
		            </div>
		            <div className='col-lg-1 col-sm-1 no-gutter'>
		            	<input 
		            		 
		            		value={price} 
		            		onChange={(e) => this.handleFields({kind:'price',value:e.target.value})}
		            		className='price form-control line-item-input'/>
		            </div>

		            <div className='col-lg-1 col-sm-1'>
		            	<input 
			            	
			            	onChange={(e) => this.handleFields({kind:'quantity_ordered',value:e.target.value})} 
			            	value={quantity_ordered}
			            	className='quantity-ordered form-control line-item-input qty-ord'/>

		            </div>
		            <div className='col-lg-2 col-sm-2'>
		            	<input 
		            	onChange={(e) => this.handleFields({kind:'quantity_delivered',value:e.target.value})} 
		            	className='quantity-delivered form-control line-item-input qty-del'/>
		            </div>
		            <div className='total col-lg-2 col-sm-2'><span className='line-total'>${(Number(quantity_ordered)*Number(price)).toFixed(2)}</span></div>

		            <span 
		            	className='delete-item' 
		            	onClick={() => {deleteItem({id:this.props.id})}}>
		            	x
		            </span>

	            </div>
				
			</div>
			</form>)
	}
}