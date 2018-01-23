export class User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export class Register extends User {
    password: string;
    confirmPassword: string;
}