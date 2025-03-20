import { baseStateApi } from '@/shared/api';
import { AccountState, AuthCredentials, RegisterCredentials } from '../model/types';

export const authApi = baseStateApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<AccountState, AuthCredentials>({
            query: body => ({
                url: '/auth/login',
                method: 'POST',
                body
            })
        }),
        register: build.mutation<AccountState, RegisterCredentials>({
            query: body => ({
                url: '/auth/register',
                method: 'POST',
                body
            })
        })
    })
});
export const { useLoginMutation, useRegisterMutation } = authApi;
