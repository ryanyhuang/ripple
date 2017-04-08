import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

//console.log(SpotifyWebApi);
let spotifyApi = new SpotifyWebApi({
  clientId : '7bccf322d5644ad4905b43e7d0f61f7f',
  clientSecret : 'f29e679682c04d6b84f3e4aae6f5adae',
  redirectUri : 'http://www.example.com/callback'
});
//spotifyApi.setPromiseImplementation(Q);



let SearchResults = React.createClass({
	render: function(){
		if(this.state.resultsToShow.length === 0){
			return(			
				<div>
					<h1> Searching for {this.props.wordSearched}</h1>
					<p> no results d</p>
				</div>
			);
		}
		var trackElems = (this.state.resultsToShow).map(function(song, i){
			return <p key={i} > {song.song_name} </p>;
		});

		return(
			<div>
				<h1> Searching for {this.props.wordSearched}</h1>
				{trackElems}
			</div>
		);
	},

	getSearchResults: function(){
		var retTracks = [];
		var that = this;
		var word = this.props.wordSearched;
		if(word === null || word === ''){
			this.setState({
				resultsToShow: retTracks,
				searchTerm: word
			});
			return;
		}
		spotifyApi.searchTracks(word, {limit: 5}, function(err, res) {
			if(err){
				console.log(err);
				return;
			}
			var numsongs = res.tracks.items.length;
			//console.log(res.body.tracks); 

		    var max = 5;
		    if(numsongs < max) max = numsongs;

		    for (var i = 0; i < max; i++) {


				var songInfo = {
					song_album: res.tracks.items[i].album.name,
					song_name: res.tracks.items[i].name,
					song_artist: res.tracks.items[i].artists[0].name,
					song_id: res.tracks.items[i].id,
					song_img: res.tracks.items[i].album.images[2].url,
					requested: false

				};

				//console.log("adding %s w %s", songInfo.song_name, alreadyReq);
				retTracks.push(songInfo);
				

			}
			that.setState({
				resultsToShow: retTracks,
				searchTerm: word
			});
		});

		//this.setState({resultsToShow: retTracks});
		
	},

	getInitialState: function(){
		/*
		let results = [{
			song_album: "album",
			song_name: "no results",
			song_artist: "artist",
			song_id: "id",
			song_img: "img",
			requested: false			
		}];*/
		return {
			resultsToShow: [],
			searchTerm: this.props.wordSearched
			//this.getSearchResults()
		}

	},

	componentWillUpdate: function(){
		this.getSearchResults();
	},

	shouldComponentUpdate: function(newProps){
		if(newProps.wordSearched === this.state.searchTerm) return false;
		else return true;
	}

});

export default SearchResults;