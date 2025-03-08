import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './types';
import { RootState } from '@/entities/store';

const initialState: SearchState = {
    search: '',
    route: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        changeRoute: (state, action: PayloadAction<string>) => {
            console.log('route state changed to', action.payload);
            state.route = action.payload;
        }
    }
});

export const { changeRoute, changeSearch } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.search;
export const selectRoute = (state: RootState) => state.search.route;
