'use client';
import { BASE_URL } from '@/shared/utils/constants';
import wretch from 'wretch';


export const externalApi = wretch(BASE_URL)
    .headers({ 'Content-Type': 'application/json' })
    .options({ credentials: 'include' });
