export interface Transaction {
    id?: string;
    description: string;
    amount: number;
    when: string;
    owner?: string;
}