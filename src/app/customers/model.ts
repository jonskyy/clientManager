
export interface Customer {
    id?: number;
    name: string;
    photoUrl: string;
    description: string;
    age: number;
    address: Address;
    type: CustomerType;
    categories: string[];
}

export interface Address {
    street: string;
    houseNumber: number;
    city: string;
}

export enum CustomerType {
    Standard,
    Premium,
    VIP
}