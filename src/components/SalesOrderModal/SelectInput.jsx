import React,{Component} from 'react';

import Autosuggest from 'react-autosuggest';
import {list} from '../../../utils/resources';

export class Suggest extends React.Component {
  constructor() {
    super();
 	  var that = this;
    this.state = {
      value: '',
      suggestions: that.getSuggestions('')
    };
 
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
  }

 getSuggestionValue = (suggestion) => {
 	this.props.getFields(suggestion);

   return suggestion.item_number;                 
 }

 setValueState = (value) => {

  this.setState({value});

 }
  
 renderSuggestion(suggestion) {
   return (
     <span>{suggestion.item_number}</span>
   );
 }
 getSuggestions(value) {
   const inputValue = value.trim();
   const inputLength = inputValue.length;
   return inputLength === 0 ? [] : list.filter(function(items){return items.item_number.slice(0,inputLength)=== inputValue})
  
 }
  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }
 
  onSuggestionsUpdateRequested({ value }) {
  	var that = this;
    this.setState({
      suggestions: that.getSuggestions(value)
    });
  }
 
  render() {
  	
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Item #',
      value,
      onChange: this.onChange
    };
 
    return (
      <Autosuggest suggestions={suggestions}
                   onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                   getSuggestionValue={this.getSuggestionValue}
                   renderSuggestion={this.renderSuggestion}
                   inputProps={inputProps} />
    );
  }
}

