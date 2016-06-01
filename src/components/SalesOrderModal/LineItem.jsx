import React,{Component} from 'react';
import * as actionCreators from '../../actions/salesActions';
import store from '../../store';
import {deleteItem} from '../../actions/salesActions';
import {Suggest} from './SelectInput.jsx';



export default class LineItem extends React.Component {
	constructor(...props){
		super(props);

		this.state = {
			item_number:null,
			description:null,
			price:null,
			quantity_ordered:null
		}
	}
	getFields = (obj) => {

		this.setState(obj)
	}
	handleFields = (obj) => {
		let nextState = {...this.state};
		nextState[obj.kind] = obj.value;
		
		this.setState(nextState);
	}

	render() {
		const {quantity_ordered,description,price} = this.state;
		console.log('price',price)
		return(
			<form>
			<div className='col-lg-12 no-gutter line-item-contain'>
				<div>	        
		            <div className='col-lg-2 no-gutter'>
		            	<Suggest getFields={this.getFields}/>
		            </div>
		            <div className='col-lg-4 no-gutter'>
		            	<input 
		            		id='description' 
		            		value={description} 
		            		className='form-control line-item-input'/>
		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
		            		id='price' 
		            		value={price} 
		            		onChange={(e) => this.handleFields({kind:'price',value:e.target.value})}
		            		className='form-control line-item-input'/>
		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
		            		className='form-control line-item-input'/>
		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input 
			            	id='quantity-ordered'
			            	onChange={(e) => this.handleFields({kind:'quantity_ordered',value:e.target.value})} 
			            	value={quantity_ordered}
			            	className='form-control line-item-input'/>

		            </div>
		            <div className='col-lg-1 no-gutter'>
		            	<input className='form-control line-item-input'/>
		            </div>
		            <div className='col-lg-2 no-gutter'>{(Number(quantity_ordered)*Number(price)).toFixed(2)}</div>

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