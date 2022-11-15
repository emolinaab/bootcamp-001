import Config from 'react-native-config';
import axios from 'axios';

export const api = axios.create({
  baseURL: Config.REACT_APP_BASE_URL || 'https://pokeapi.co/api/v2/',
});
