
type MethodType = 'DELETE' | 'POST' | 'GET'

export const fetcher = async (url:string,body:unknown,method:MethodType, headers:Record<any, any>) => {

    return  fetch(url, {
        headers: {
            ...headers,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
        credentials: 'include',
        method: method,
    });
};