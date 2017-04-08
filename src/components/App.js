import React from 'react';
import './App.css';
import TabButton from './TabButton';
import SearchScreen from './SearchScreen';

let headerStyle = {
  fontSize: 50,
  color: "red"
}

let App = React.createClass({

    getInitialState: function() {
        return ({ 
            screen: "search"
        });
    },

    render: function() {
        var content;
        if(this.state.screen === "search"){
            content = (
                <div>
                    <SearchScreen/>
                </div>     
            );
        } else {
            content = (
                <div> </div>

            );
        }
        
        return (
            <div className="App">
                {/*<div className="App-header"> */}
                <div style={headerStyle}>
                    <h2>Welcome to {this.state.screen} Screen</h2>
                </div>
                {content}

                <TabButton name="search" callback={this.switchScreens}/>
                <TabButton name="feed" callback={this.switchScreens}/>
            </div>
        );
    },

    switchScreens: function(newScreen) {
        this.setState({
            screen: newScreen
        });

    }

});

export default App;







