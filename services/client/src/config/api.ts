import axios from 'axios';
import vars from './vars';

const $api = axios.create({
	baseURL: vars.API_URL,
});

export default $api;
