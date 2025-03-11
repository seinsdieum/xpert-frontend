import MarketSearch from './ui/MarketSearch';
import {
    selectSearch,
    selectRoute,
    changeSearch,
    changeRoute,
    searchSlice,
    searchActions
} from './model/searchSlice';

import { SearchState, SearchSuggestion } from './model/types';
import { searchQueryParam } from './config';
export { MarketSearch };

export {
    selectSearch as selectSearch,
    selectRoute as selectRoute,
    searchSlice,
    searchQueryParam,
    searchActions
};
export { changeRoute, changeSearch };
export type { SearchState, SearchSuggestion };
