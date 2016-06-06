"use strict";

import React,{Component} from 'react';
import Autosuggest from 'react-autosuggest';
import List from '../../../utils/resources';

export class StateSelect extends React.Component {
		constructor() {
		super();
		this.state = {
			states:[],
			suggestions: this.getSuggestions(''),
			stateSelect: List.List.StateSelect, 
			value:'',
		}
	}
	
	getSuggestions = (value) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		
		
		return inputLength === 0 ? [] : this.state.stateSelect.filter(obj =>
		obj.abbreviation.toLowerCase().slice(0, inputLength) === inputValue
		);
	}
	getSuggestionValue = (suggestion) => {
		return suggestion.abbreviation;
	}
	renderSuggestion = (suggestion) => {
	return (
		<span>{suggestion.name}</span>
		);
	}
	onChange = (event, { newValue }) => {
		this.setState({value: (newValue).substring(0,2).toUpperCase()});
		this.props.handleFields({kind:'state', value:(newValue.substring(0,2)).toUpperCase()});

	}
	onSuggestionsUpdateRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value),
		});
	}
	clear = () => {
		this.setState({
			value: '',
		})
	}
	stateSet = (state) => {
		this.setState({
			value:state,
		})
	}
	handleErrors = () => {
		
		this.props.handleErrors({kind:'state', value:(this.state.value.substring(0,2)).toUpperCase()});
	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
				placeholder: 'State',
				value,
				onChange: this.onChange,
				onBlur:this.handleErrors,
		};

		return (
			<Autosuggest 
				id='autoState' 
				suggestions={suggestions}
				value={value}
				onChange={this.onChange}
				onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
				getSuggestionValue={this.getSuggestionValue}
				renderSuggestion={this.renderSuggestion}
				isDisabled={true}
				inputProps={inputProps}/>)
	
	}
}