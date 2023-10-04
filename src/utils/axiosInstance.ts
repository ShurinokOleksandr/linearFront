import axios from 'axios';


export const api = axios.create({
	baseURL:'http://localhost:4000',


});
api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});
api.interceptors.response.use((config) => {
	return config;
},
async (error) =>{

	const originalRequest = error.config;
	if(error.response.status === 401 && error.config &&  !error.config._isRetry){
		originalRequest._isRetry = true;
		try {
			const response = await axios.post('http://localhost:4000/auth/refresh',{ refreshToken:localStorage.getItem('refresh') });
			console.log(response);
			localStorage.setItem('token', response.data);
			return api.request(originalRequest);

		} catch (e) {
			console.log('НЕ АВТОРИЗОВАН');
		}
	}
	throw error;
}
);