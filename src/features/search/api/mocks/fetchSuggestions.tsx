import { SearchSuggestion } from '../../model/types';

async function fetchSuggestions(str: string, resultCb: (sugs: SearchSuggestion[]) => void) {
    if (!str) {
        resultCb([]);
    } else {
        resultCb([
            { title: `${str}`, route: '/tasks' },
            { title: `${str}`, route: '/' },
            { title: `${str}`, route: '/chats' }
        ]);
    }
}
export default fetchSuggestions;
