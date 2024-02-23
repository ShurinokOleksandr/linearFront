import wretch from 'wretch';

export const getAccessToken = () => wretch('/routes/get-access-token')
    .get()
    .res(async (res) => {
        const data = await res.json();
        return data;
    });
