import React, {Component} from 'react';
import {updateSalesTax,updateAddDis} from '../../actions/salesActions';

export default class TFD extends React.Component {

	render() {
		
		return(
			<div className='col-lg-12 no-gutter no-gutter'>
			<div className='col-lg-8'></div>
			<div className='col-lg-4 no-gutter'>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6 no-gutter'>Sub Total</div>
					<div className='col-lg-6 no-gutter'>
						<span className='sub-total'>${(this.props.total).toFixed(2)}</span>
					</div>

				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6 no-gutter'>Sales Tax</div>
					<div className='col-lg-6 no-gutter'>
						<input 
						value={this.props.salesTax}
						className='form-control sales-tax' 
						onChange={(e)=> updateSalesTax(e.target.value)}/>
					</div>

				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6 no-gutter'>Add. Discount</div>
					<div className='col-lg-6 no-gutter'>
						<input
						value={this.props.addDis} 
						className='form-control add-discount'
						onChange={(e)=> updateAddDis(e.target.value)}/>
					</div>

				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>

					<div className='col-lg-6 no-gutter'>Total</div>
					<div className='col-lg-6 no-gutter total'>$
					{(Number(this.props.total)+Number(this.props.salesTax)-Number(this.props.addDis)).toFixed(2)}
					</div>

				</div>
			</div>
			</div>
		)
	}
}

