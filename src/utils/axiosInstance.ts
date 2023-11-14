

export const BASE_URL = 'http://localhost:4001';
// export const api = axios.create({
// 	headers:{
// 		'Content-Type':'application/json'
// 	},
// 	withCredentials:true,
// 	baseURL:BASE_URL
// });







// export const Api = ky.create({
// 	headers:{
// 		'Content-type':'application/json'
// 	},
// 	credentials:'include',
// 	prefixUrl:BASE_URL
// }
// );
// const access_token = cookies().get('access_token');
// const refresh_token = cookies().get('refresh_token');

// api.interceptors.request.use((config) => {
// 	config.headers.Authorization = `Bearer ${access_token}`;
// 	return config;
// });
// api.interceptors.response.use((config) => {
// 	return config;
// },
// async (error) =>{
//
// 	const originalRequest = error.config;
// 	if(error.response.status === 401 && error.config &&  !error.config._isRetry){
// 		originalRequest._isRetry = true;
// 		try {
// 			const response = await api.post('/auth/refresh',{ refresh_token });
// 			console.log(response);
// 			localStorage.setItem('token', response.data);
// 			return api.request(originalRequest);
//
// 		} catch (e) {
// 			console.log('НЕ АВТОРИЗОВАН');
// 		}
// 	}
// 	throw error;
// }
// );