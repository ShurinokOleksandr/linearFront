'use client';
import wretch from 'wretch';

export const BASE_URL = 'http://localhost:4001/';

export const externalApi = wretch(BASE_URL)
    .headers({ 'Content-Type': 'application/json' })
    .options({ credentials: 'include' });
