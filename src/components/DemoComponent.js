/// <reference path="../node_modules/spotify-web-api-js/src/typings/spotify-web-api.d.ts" />

import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

//console.log(SpotifyWebApi);
let spotifyApi = new SpotifyWebApi({
  clientId : '7bccf322d5644ad4905b43e7d0f61f7f',
  clientSecret : 'f29e679682c04d6b84f3e4aae6f5adae',
  redirectUri : 'http://www.example.com/callback'
});


let DemoComponent = React.createClass({
	render: function() {
		spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
			if (err) console.error(err);
			else console.log('Artist albums', data);
		});

		return (
			<div>
				<p> lol my name is josh and my value is {this.state.variable} and my prop value is {this.props.defnum}</p>
				<button onClick={this.triggerClick}> Add to variable </button>
			</div>
		);
	},
	getInitialState: function() {
		return ({ 
			variable: 5
		});
	},
	triggerClick: function() {
		this.setState({
			variable: this.state.variable + 1
		})
	}
});




export default DemoComponent;