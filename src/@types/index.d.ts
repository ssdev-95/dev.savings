export interface Transaction {
    id?: string;
    description: string;
    amount: number;
    category: string;
    when: string;
    owner?: string;
}

export interface User {
    id: string;
    name: string;
}