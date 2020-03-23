import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

axios.defaults.headers = { 'Content-Type': 'application/json' };

async function defaultAPI({ user, method = 'GET' }) {
	const response = await axios({ url: BASE_URL + user, method });
	return response;
}

export default defaultAPI;
