import { ILogin } from "../IModel/ILogin";

export interface IUserService {
    createUser(userInfo: any): Promise<any>
    loginUser(userInfo: ILogin): Promise<any>
}