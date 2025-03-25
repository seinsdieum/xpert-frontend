export interface AuthCredentials {
    username: string;
    password: string;
}

export interface RegisterCredentials extends AuthCredentials {
    email: string;
    firstname: string;
    lastname?: string;
}

export interface AccountState {
    username: string;
    access_token: string;
    id: number;
    role: string;
}
