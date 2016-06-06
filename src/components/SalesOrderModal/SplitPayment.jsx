import React from 'react';

export default class SplitPayment extends React.Component {
	constructor(...props) {
		super(props);

		this.state = {
			cash:2,
			credit:1,
			check:0,
			input1:'',
			input2:''
		}
	}
	change = (e) => {

		var val = e.target.value; // cash, credit, check
		var id = Number(e.target.id.slice(-1)); // 0, 1, 2
		var newState = Object.assign(this.state);

		for (var key in newState) {
			if (newState[key] === id) {
				newState[key] = 0;
			}
		}
		
		newState[val] = id;
		this.setState(Object.assign(this.state, newState));
	}
	calcDiff = (e) => {
		let {id,value} = e.target


		if(id==='input1') {
			this.setState({
				input1: value,
				input2: (this.props.total - value).toFixed(2),
			})
			
		}
		if(id ==='input2') {
			this.setState({
				input2: value,
				input1: (this.props.total - value).toFixed(2), 
			})
			
		}		
	}
	render() {
		return(
			<div>
				<div className='col-lg-12 no-gutter tfd-contain'>
					<div className='col-lg-6 no-gutter'>

						<select id='payment1' onChange={this.change}>
							{this.state.cash === 2 ? null : <option  value="cash" disabled={this.state.cash === 2}>cash</option>}
							{this.state.credit === 2 ? null : <option  value="credit" disabled={this.state.credit === 2}>credit</option>}
							{this.state.check === 2 ? null : <option  value="check" disabled={this.state.check === 2}>check</option>}
						</select>

					</div>

					<div className='col-lg-6 no-gutter'>
					<input id='input1' value={this.state.input1} onChange={this.calcDiff} className='form-control split-payment'/>
					</div>
				</div>

				<div className='col-lg-12 no-gutter tfd-contain'>
					<div className='col-lg-6 no-gutter'>

						<select id='payment2' onChange={this.change}>
						{this.state.credit === 1 ? null : <option  value="credit" disabled={this.state.credit === 1}>credit</option>}
						{this.state.check === 1 ? null : <option  value="check" disabled={this.state.check === 1}>check</option>}
						{this.state.cash  === 1 ? null : <option  value="cash" disabled={this.state.cash === 1}>cash</option>}
						</select>

					</div>
					<div className='col-lg-6 no-gutter'>
					<input id='input2' value={this.state.input2} onChange={this.calcDiff} className='form-control split-payment'/>
					</div>
				</div>

			</div>
		);
	}
}