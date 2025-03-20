import { authSlice, AuthState, changeAccount, clearAccount } from './model/auth-slice';
import { AccountState, AuthCredentials, RegisterCredentials } from './model/types';
import { useLoginMutation, useRegisterMutation, authApi } from './api';
import { selectAccount } from './model/auth-slice';
export type { AccountState, AuthCredentials, RegisterCredentials, AuthState };
export {
    authSlice,
    changeAccount,
    clearAccount,
    authApi,
    useLoginMutation,
    useRegisterMutation,
    selectAccount
};
