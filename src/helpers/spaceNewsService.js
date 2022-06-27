import axios from "axios";

export const getAllSpaceNews = () => {
	return axios.request({
		method: 'GET',
		url: '' +
			'country=br&' +
			''
	});
}; 