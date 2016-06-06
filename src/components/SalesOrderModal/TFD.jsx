import React, {Component} from 'react';
import {updateSalesTax,updateAddDis} from '../../actions/salesActions';
import SplitPayment from './SplitPayment.jsx'

export default class TFD extends React.Component {
	constructor(...props) {
		super(props);

		this.state = {
			split:false
		}
	}
	handleSelect = (e) => {

		if(e.target.value==='split') {
			
			this.setState({split:true});
		}
		else {
			this.setState({split:false});
		}

	}
	render() {
		
		return(
			<div className='col-lg-12 no-gutter no-gutter'>
			<div className='col-lg-9'></div>
			<div className='col-lg-3 no-gutter'>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6'>Sub Total</div>
					<div className='col-lg-6'>
						<span className='sub-total'>${(this.props.total).toFixed(2)}</span>
					</div>

				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6'>Sales Tax</div>
					<div className='col-lg-6 no-gutter'>
						<input 
						value={this.props.salesTax}
						className='form-control sales-tax' 
						onChange={(e)=> updateSalesTax(e.target.value)}/>
					</div>

				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6'>Add. Discount</div>
					<div className='col-lg-6 no-gutter'>
						<input
						value={this.props.addDis} 
						className='form-control add-discount'
						onChange={(e)=> updateAddDis(e.target.value)}/>
					</div>

				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6'>Total</div>
					<div className='col-lg-6 no-gutter total'>
					<span className='sub-total'>${(Number(this.props.total)+Number(this.props.salesTax)-Number(this.props.addDis)).toFixed(2)}</span>
					</div>

				</div>

				<div>
					
					<div className='col-lg-3'>
						<select className='select-main' onChange={this.handleSelect}>
							<option value="cash">Cash</option>
							<option value="credit">Credit</option>
							<option value="check">Check</option>
							<option value="split">Split</option>
						</select>
					</div>
				</div>

				
			</div>
			{this.state.split ? 
					<div className='col-lg-12 no-gutter tfd-contain'>
						<div className='col-lg-9 no-gutter'></div>
						<div className='col-lg-3 no-gutter'>
						<SplitPayment total={Number(this.props.total)+Number(this.props.salesTax) - Number(this.props.addDis)}/>
						</div>
					</div>
					: null}
			</div>
		)
	}
}

