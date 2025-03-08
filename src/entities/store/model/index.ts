import { searchSlice } from '@/features/search';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
