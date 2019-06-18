import React, { Component } from 'react';

class SearchBar extends Component {
    render(){
        return (
          <div style = {{
            display:'block',
            position: 'absolute',
            left: '40%',
          }}>

              <div>
                <input placeholder="Search Businesses" onChange = {this.props.handleTermEvent} />
              </div>
                <input placeholder="Where?" onChange = {this.props.handleLocationEvent} />
              <div style = {{display: 'inlineBlock', textAlign: 'center'}}>
                <button style = {{cursor: 'pointer'}} onClick = {this.props.handleApi}>Let's Go</button>
              </div>
          </div>
        );
    }
}

export default SearchBar;
