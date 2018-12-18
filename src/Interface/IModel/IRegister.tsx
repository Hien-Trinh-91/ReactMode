export interface IRegister {
    Username: string,
    Password: string,
    CPassword?: string,
    FormError?: {
        UsernameError: string,
        PasswordError: string,
        CPasswordError?: string,
    }
    FormValid?: boolean,
}
