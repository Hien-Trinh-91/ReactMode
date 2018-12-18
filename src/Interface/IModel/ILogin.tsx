export interface ILogin {
    Username: string,
    Password: string,
    FormError?: {
        UsernameError: string,
        PasswordError: string,
    }
    FormValid?: boolean,
    Remember?: boolean
}
