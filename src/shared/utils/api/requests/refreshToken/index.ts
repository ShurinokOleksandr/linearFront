import wretch from 'wretch';

export const refreshToken = ( ) => wretch().get('/routes/refresh-token');

