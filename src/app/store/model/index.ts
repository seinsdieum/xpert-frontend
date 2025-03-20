import { authSlice } from '@/entities/auth';
import { searchSlice } from '@/features/search';
import { baseStateApi } from '@/shared/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        auth: authSlice.reducer,
        [baseStateApi.reducerPath]: baseStateApi.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(baseStateApi.middleware);
    }
});
