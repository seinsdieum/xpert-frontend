import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendBaseUrl } from '../config';
import { clearAccount } from '@/entities/auth';

const baseQuery = fetchBaseQuery({
    baseUrl: backendBaseUrl,
    prepareHeaders: headers => {
        const token = JSON.parse(localStorage.getItem('account') || 'null')?.access_token;
        if (token) headers.set('Authorization', `Bearer ${token}`);
        return headers;
    }
});

const baseStateApi = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result.error && result.error.status === 401) {
            api.dispatch(clearAccount());
            localStorage.removeItem('account');
        }

        return result;
    },

    tagTypes: [],
    endpoints: () => ({})
});

export default baseStateApi;
