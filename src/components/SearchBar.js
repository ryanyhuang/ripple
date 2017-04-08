import React from 'react';

let SearchBar = React.createClass({
	render: function(){
		return(
			<input type="search" placeholder="Search"
					value={this.state.inputValue} onChange={this.updateInputValue}/>
		);
	},

	getInitialState: function(){
		return{
			inputValue: ''
		};
	},

	updateInputValue: function(evt){
		this.props.callback(evt.target.value);
		
		this.setState({
			inputValue: evt.target.value
		});
	}


});

export default SearchBar;