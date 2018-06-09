import axios from 'axios';

const API = axios.create({
  baseURL: 'https://itunes.apple.com/',
});

export default API;
