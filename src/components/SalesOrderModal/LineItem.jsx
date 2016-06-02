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
			quantity_on_hand:null,
			quantity_delivered:null
		}
	}
	getFields = (obj) => {

		this.setState(obj)

		updateItem({data:obj,id:this.props.id})
	}
	handleFields = (obj) => {
		let nextState = {...this.state};
		nextState[obj.kind] = obj.value;
		
		this.setState(nextState);

		updateItem({data:nextState,id:this.props.id})


	}

	render() {
		const {quantity_ordered,description,price} = this.state;
		
		return(
			<form>
			<div className='col-lg-12 no-gutter line-item-contain'>
				<div>	        
		            <div className='col-lg-2 no-gutter'>
		            	<Suggest getFields={this.getFields} handleFields={this.handleFields}/>
		            </div>
		            <div className='col-lg-4 no-gutter'>
		            	
		            	<DescriptionInput 
							getFields={this.getFields} 
							handleFields={this.handleFields}/>
		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
		            		 
		            		value={price} 
		            		onChange={(e) => this.handleFields({kind:'price',value:e.target.value})}
		            		className='price form-control line-item-input'/>
		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
		            		
		            		onChange={(e) => this.handleFields({kind:'quantity_on_hand',value:e.target.value})} 
		            		className='quantity-on-hand form-control line-item-input'/>
		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
			            	
			            	onChange={(e) => this.handleFields({kind:'quantity_ordered',value:e.target.value})} 
			            	value={quantity_ordered}
			            	className='quantity-ordered form-control line-item-input'/>

		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
		            	onChange={(e) => this.handleFields({kind:'quantity_delivered',value:e.target.value})} 
		            	className='quantity-delivered form-control line-item-input'/>
		            </div>
		            <div className='total col-lg-2 no-gutter'>{(Number(quantity_ordered)*Number(price)).toFixed(2)}</div>

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