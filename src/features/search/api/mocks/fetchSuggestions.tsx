import { Suggestion } from '../../model/types';

async function fetchSuggestions(str: string, resultCb: (sugs: Suggestion[]) => void) {
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
