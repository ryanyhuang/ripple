import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

let SearchScreen = React.createClass({
	render: function(){
		return(
			<div>
				<SearchBar callback={this.searchValChanged}/>
				<SearchResults wordSearched={this.state.searchVal}/>
			</div>
		);
	},

	getInitialState: function(){
		return{
			searchVal: ''
		};
	},

	searchValChanged: function(newSearchVal){
		this.setState({
			searchVal: newSearchVal
		});
	}

});

export default SearchScreen;