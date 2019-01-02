export interface IRegister {
    Username: string,
    Fullname: string,
    Password: string,
    CPassword?: string,
    Role: Number,
    FormError?: {
        UsernameError: string,
        FullnameError: string,
        PasswordError: string,
        CPasswordError?: string,
    }
    FormValid?: boolean,
}
