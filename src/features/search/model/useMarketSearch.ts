import { useState } from 'react';
import { Suggestion } from './types';
import fetchSuggestions from '../api/mocks/fetchSuggestions';

const useMarketSearch = (startCb?: () => void, endCb?: () => void) => {
    const [results, setResults] = useState<Suggestion[]>([]);

    const search = function (query: string) {
        startCb?.();
        fetchSuggestions(query, setResults).then(() => endCb?.());
    };

    return { results, search };
};

export default useMarketSearch;
