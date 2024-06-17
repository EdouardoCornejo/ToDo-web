export interface User {
    id: string;
    email: string
    name: string
}

export interface Token {
    token: string;
}


export interface LoginEntity {
    data:{
        user: User,
        token: Token
    }
}


export interface Register {
    email: string;
    name: string;
    password: string;
}


export interface RegisterEntity {
    data: Register
}
