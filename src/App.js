import React, { Component } from 'react';
import axios from 'axios';
import Business from './business';
import SearchBar from './searchBar';
import {getYelp} from './httpService';
const apiKey = "K4FRgQNCw2Zb4-HkoRtN0JmDDcBy-TYh5dLOdE_lSZLDSU0KenCeo7WHCsPCrUWkZcrTCfyw6jczTZ-CPTBV4yxVPj8hlnI4Cwu2oB1mqhmHjZJy5MgpgZ29RPYDXXYx";
const baseUrl = "https://api.yelp.com/v3/businesses/search";
const herokuapp = 'https://cors-anywhere.herokuapp.com/';
const config = {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    params: {
      term: 'taco',
      location: 'PortLand',
    } 
};
class App extends Component {
    state = {
      term:'',
      coordinates: '',
      longitude: '',
      show: false,
      posts:[]
    };
    handleSearch = async (event) =>{
      event.preventDefault();
      const {data:posts} = await getYelp(this.state.term, this.state.location, this.state.coordinates);
      this.setState({posts: posts.businesses});
    };
    handleTermEvent = event =>{
      this.setState({term: event.target.value,show:true})
    };
    handleLocationEvent = event =>{
      this.setState({location: event.target.value})
    };
    render() {
        return (
          <div>
              <SearchBar handleTermEvent = {this.handleTermEvent} handleLocationEvent = {this.handleLocationEvent} handleApi = {this.handleSearch}/>
                {
                  this.state.show ? <Business posts = {this.state.posts} /> : 
                  <p style = {{position: 'relative', left: '50%'}}>
                      Enter in a name of a restarant or a type catagorey, 'Example: Taco Bell or Mexican'
                  </p> 
                }
          </div>
        );
    }
}

export default App;
