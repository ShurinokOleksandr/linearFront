import { cookies } from 'next/headers';
// переписать на вретч всё попробовать
export async function POST(request: Request) {
    const cookieStore = cookies();
    const responseForFetch = await request.json();
    const access_token = cookieStore.get('access_token')?.value;
    const refresh_token = cookieStore.get('refresh_token')?.value;
    const responses = await fetch('http://localhost:4001/workspace/create', {
        headers: {
            authorization: `Bearer ${access_token}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(responseForFetch),
        credentials: 'include',
        method: 'POST',
    });
    const data = await responses.json();
    if (responses.status === 401) {
        const res = await fetch('http://localhost:4001/auth/refresh', {
            headers: {
                authorization: `Bearer ${refresh_token}`,
                'Content-type': 'application/json',
            },
            credentials: 'include',
            method: 'GET',
        });
        const data = res.headers.getSetCookie()[0];
        const cookies = Object.fromEntries(
            data.split('; ').map((cookie) => cookie.split('='))
        );

        const accessToken = cookies['access_token'];
        //переписать ,теряються ошибки которые возвращает бекенд
        const createWorkspaceResponse = await fetch(
            'http://localhost:4001/workspace/create',
            {
                headers: {
                    authorization: `Bearer ${accessToken}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(responseForFetch),
                credentials: 'include',
                method: 'POST',
            }
        );
        const createWorkSpaceData = await createWorkspaceResponse.json();

        return new Response(
            JSON.stringify(
                // { message: createWorkSpaceData.message }
                { data: createWorkSpaceData }
            ),
            {
                headers: { 'Content-Type': 'application/json' },
                status: createWorkspaceResponse.status,
            }
        );
    }
    return new Response(JSON.stringify({ data: data }), {
        headers: { 'Content-Type': 'application/json' },
        status: responses.status,
    });
}
