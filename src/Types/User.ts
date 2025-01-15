export interface User {
    id: number;
    name: string;
    email: string;
    roles:string[];
    permissions: string[];
    avatarUrl: string
}