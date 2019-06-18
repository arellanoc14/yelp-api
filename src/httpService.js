
import axios from 'axios';
const apiKey = "K4FRgQNCw2Zb4-HkoRtN0JmDDcBy-TYh5dLOdE_lSZLDSU0KenCeo7WHCsPCrUWkZcrTCfyw6jczTZ-CPTBV4yxVPj8hlnI4Cwu2oB1mqhmHjZJy5MgpgZ29RPYDXXYx";
const baseUrl = "https://api.yelp.com/v3/businesses/search"
const herokuapp = 'https://cors-anywhere.herokuapp.com/'

function getYelp(term,location,coordinates){
const config = {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    params: {
      term: term,
      location: location,
      coordinates: coordinates,
    } 
}
  return axios.get(`${herokuapp}${baseUrl}`, config);
}
export {getYelp}