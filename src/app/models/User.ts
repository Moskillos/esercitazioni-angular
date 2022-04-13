export interface Address {
    city: string,
    street: string,
    postalCode: string
}

export interface Company{
    id: number,
    name: string,
    description: string,
    location: Address,
}


export interface User {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: Date,
    address: Address,
    role: 'staff' | 'manager' | 'student' | 'admin'
    username: string,
    profilePhotoUrl: string,
    companies: Company[],
    gender: 'male' | 'female' | 'other'
}


