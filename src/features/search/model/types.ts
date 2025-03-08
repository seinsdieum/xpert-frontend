export interface SearchState {
    search: string;
    route: string;
}

export type Suggestion = {
    title: string;
    route?: string;
};
