import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-bugger-56c06.firebaseio.com/'
});

export default instance;
