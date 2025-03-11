export interface SearchState {
    search: string;
    route: string;
}

export type SearchSuggestion = {
    title: string;
    route?: string;
};
