import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountState } from './types';
import { RootState } from '@/shared/config';
import { authApi } from '../api';

export type AuthState = {
    account?: AccountState;
};

const initialState: AuthState = {
    account: JSON.parse(localStorage.getItem('account') ?? 'null') ?? undefined
};

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        changeAccount: (state, action: PayloadAction<AccountState>) => {
            state.account = action.payload;
        },
        clearAccount: state => {
            localStorage.removeItem('account');
            state.account = undefined;
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
                localStorage.setItem('account', JSON.stringify(payload));
                state.account = payload;
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
                localStorage.setItem('account', JSON.stringify(payload));
                state.account = payload;
            })
            .addMatcher(authApi.endpoints.verify.matchRejected, state => {
                localStorage.removeItem('account');
                state.account = undefined;
            });
    }
});

export const { changeAccount, clearAccount } = authSlice.actions;
export const selectAccount = (state: RootState) => state.auth.account;
