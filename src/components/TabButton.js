import React from 'react';

let TabButton = React.createClass({

	render: function(){
		return(
			<button onClick={this.triggerClick}> {this.props.name} </button>
		);
	},

	getDefaultProps: function(){
		return {name: "hello"};
	},

	triggerClick: function(){
		this.props.callback(this.props.name);
	}


});

export default TabButton;