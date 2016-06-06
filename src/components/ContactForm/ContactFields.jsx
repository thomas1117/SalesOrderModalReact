"use strict";

import React,{Component} from 'react';
import Autosuggest from 'react-autosuggest';
import {StateSelect} from './StateSelect.jsx';
import {phoneFormat,validateInput} from '../../../utils/format';


export class ContactFields extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: '',
      suggestions: this.getSuggestions(''),
      food:'',
      disabled:false,
      phoneKind:'type',
      pk:null,
      back:false,
      fakeInput:true,
      phoneNumber:'',
      lastName:'',
      email:'',
      address1:'',
      address2:'',
      city:'',
      state:'',
      zip:'',
      validFirst:true,
      validEmail:true,
      validZip:true,
      validPhone:true,
      validState:true,
    };
  }

  getSuggestionValue = (suggestion) => {
    var that = this;
    this.getFieldValues(suggestion)
    this.handleFields(suggestion);
    this.setState({disabled:true});
    return suggestion.first_name; 

  }
  renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion.first_name + " " + suggestion.last_name}</span>
    );
  }
  getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  
  return inputLength === 0 ? [] : this.props.contacts.filter(con =>
    con.first_name.toLowerCase().slice(0, inputLength) === inputValue
  );
}


  getFieldValues = (obj) => { 

  this.setState({
    value:obj.first_name,
    lastName:obj.last_name,
    email:obj.email,
    address1:obj.address_1,
    address2:obj.address_2,
    city:obj.city,
    state:obj.state,
    zip:obj.zip_code,
    phoneNumber:obj.phone_number,
    phoneKind:obj.phone_kind,
    pk:obj.pk,
    disabled:false,
    businessName:obj.business_name,
    website:obj.website,
  });

    if(this.props.newParty || this.props.newContact){
      this.setState({
        disabled:true,
      })
    }   
    if(obj.state){
     

    this.refs.stateSel.stateSet(obj.state);
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({value: newValue});
    this.handleFields({kind:'value',value:newValue})
  }

  onSuggestionsUpdateRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  }

  clear = () => {
    this.setState({
      value:'',
      lastName:'',
      email:'',
      address1:'',
      address2:'',
      city:'',
      state:'',
      zip:'',
      phoneNumber:'',
      disabled:false,
      pk:null,
      validFirst:true,
      validEmail:true,
      validZip:true,
      validPhone:true,
      validState:true,

    });

    if(!this.state.disabled){
      this.refs.stateSel.clear()
    }
    
  }

  handleFields = (obj) => {
    
    var that = this;
    var nextState = {};

    nextState[obj.kind] = obj.value;

    if(obj.kind==='zip'){
      nextState[obj.kind] = obj.value.substring(0,5);
    }

    
    this.setState(nextState);
  }

  handleDash = (e) => {
    var num = e.target.value;



    if(num.length ===1 && !this.state.back){
      num = '(' + num
    }
    
    if(num.length ===4 && !this.state.back){
      num = num + ')-';
    }
    
    if(num.length ===9 && !this.state.back){
      num = num + '-';
    }
    
    num = num.slice(0,14);
    
    this.setState({
      phoneNumber:num,
      back:false,
    })

    this.handleFields({kind:'phoneNumber', value:num});
        
    }

    handleBackspace = (e) => {
        
      var val = this.state.phoneNumber;
      var len = this.state.phoneNumber.length;

      if(e.keyCode===8 && val.length > 0){

        this.setState({back:true});

        val = val.slice(0,len);

        this.setState({phoneNumber: val});

      }

  }
  handleFake = (e) => {
    this.setState({
      fakeInput:false,
      phoneNumber:e.target.value,
    })
  }
  renderInput = () => {

      return (<input 
        className='form-control'  
        disabled={this.state.disabled}  
        onKeyDown={this.handleBackspace} 
        onBlur={(e) => {this.handleErrors({kind:'phoneNumber', value:e.target.value})}}  
        onChange={(e) => {this.handleDash(e)}} 
        value={this.state.phoneNumber}/>)
    
  }
  handleErrors = (obj) => {
    
    var validated = validateInput(obj.kind,obj.value);

    this.setState(validated);
  }
  handleFirst = (obj) => {
    this.handleErrors({kind:'value',value:this.state.value});
  }
  render =() => {
    
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Enter a Contact',
      value,
      onChange: this.onChange,
      onBlur:this.handleFirst,
    };

    

   

    return (
  

      <div className='contact-parties'>
        
        <div className='col-lg-12'>

          <div className='col-lg-12 contact-line'>

            <div className='col-lg-3 noPad col-md-3'><label>First Name</label></div>

            <div className='col-lg-9 noPad col-md-9'>

              {this.state.validFirst ? null : <label className='red'>Enter a first name</label>}

              {!this.state.disabled ? <Autosuggest id='test' suggestions={suggestions}
                             value={this.state.value}
                             onChange={this.onChange}
                             onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                             getSuggestionValue={this.getSuggestionValue}
                             renderSuggestion={this.renderSuggestion}
                             isDisabled={true}
                             inputProps={inputProps} /> : <input className='form-control' value={this.state.value} disabled={true}/>}
            </div>

            

          </div>

            
            <div className='col-lg-12 contact-line'>
              
              <div className='col-lg-3 noPad col-md-3'><label>Last Name</label></div>

              <div className='col-lg-9 noPad col-md-9'>
                <input 
                className='form-control' 
                disabled={this.state.disabled} 
                onChange={(e) => {this.handleFields({kind:'lastName', value:e.target.value})}} 
                value={this.state.lastName}/>
              </div>
            
            </div>
            
            <div className='col-lg-12 contact-line'>

              <div className='col-lg-3 noPad col-md-3'><label>Email</label></div>
              
              <div className='col-lg-9 noPad col-md-9'>
                {this.state.validEmail ? null : <label className='red'>Email is Incorrect</label>}
                <input className='form-control'
                  disabled={this.state.disabled} 
                  onBlur={(e) => {this.handleErrors({kind:'email', value:e.target.value})}}
                  onChange={(e) => {this.handleFields({kind:'email', value:e.target.value})}} 
                  value={this.state.email}/>
              </div>
            
            </div>
           

            <div className='col-lg-12 contact-line'>

              <div className='col-lg-3 noPad col-md-3'><label>Address 1</label></div>
              
              <div className='col-lg-9 noPad col-md-9'>
                <input className='form-control'  
                disabled={this.state.disabled} 
                onChange={(e) => {this.handleFields({kind:'address1', value:e.target.value})}} 
                value={this.state.address1}/>
              </div>
            
            </div>

            <div className='col-lg-12 contact-line'>

              <div className='col-lg-3 noPad col-md-3'><label>Address 2</label></div>
              
              <div className='col-lg-9 noPad col-md-9'>
                <input className='form-control' 
                disabled={this.state.disabled} 
                onChange={(e) => {this.handleFields({kind:'address2', value:e.target.value})}} 
                value={this.state.address2}/>
              </div>

            </div>

            <div className='col-lg-12 contact-line'>

              <div className='col-lg-3 noPad col-md-3'><label>City</label></div>
              
              <div className='col-lg-9 noPad col-md-9'>
                <input className='form-control'  
                disabled={this.state.disabled} 
                onChange={(e) => {this.handleFields({kind:'city', value:e.target.value})}} 
                value={this.state.city}/>
              </div>
            
          </div>
            
          <div className='col-lg-12 contact-line'>
            
              <div className='col-lg-3 noPad col-md-3'><label>State</label></div>
              
              <div className='col-lg-9 noPad col-md-9'>

                {this.state.disabled ===false ? <div className='col-lg-3 noPad col-md-3 stateSelect no-gutter'>

                {this.state.validState ? null : <label className='red'>State is not Valid</label>}

                <StateSelect 
                  ref='stateSel' 
                  handleFields={this.handleFields} 
                  handleErrors={this.handleErrors} 
                  clearData={this.clearData} 
                  stateValue={this.state.stateVal}/>
                </div> : 
                
                <div className='col-lg-3 noPad col-md-3 no-gutter'>
                  <input className='form-control' 
                    disabled={this.state.disabled} 
                    style={{float:'left',width:'48px'}} 
                    value={this.state.state} 
                    onChange={(e) => {this.handleFields({kind:'state', value:e.target.value})}}/>
                </div> }

              
              
              <div className='col-lg-3 col-md-3 text-center'><label>Zip</label></div>
                
              <div className='col-lg-6 noPad col-md-6 no-gutter'>
                {this.state.validZip ? null : <label className='red'>Zip is invalid</label>}

                <input type="number" 
                className='form-control' 
                disabled={this.state.disabled}
                onBlur={(e) => {this.handleErrors({kind:'zip', value:e.target.value})}} 
                onChange={(e) => {this.handleFields({kind:'zip', value:e.target.value})}} 
                value={this.state.zip}/>

              </div>
              
              
            </div>
            </div>
            <div className='col-lg-12 contact-line'>
            <div className='col-lg-3 noPad col-md-3'><label>Phone #</label></div>


            <div className='col-lg-9 noPad col-md-9'>
            {this.state.validPhone ? null : <label className='red'>Phone must be 10 digits</label>}

            {this.renderInput()}

            </div>
            </div>

        </div>
        </div>
    );
  }
}