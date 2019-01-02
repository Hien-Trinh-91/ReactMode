import { ILogin } from "../Interface/IModel";
import { IUserService } from "../Interface/IService";
import axios from 'axios';
export class UserService implements IUserService {
    private static _instance: UserService
    private constructor() {

    }
    public static Instance() {
        return this._instance || (this._instance = new this());
    }
    async createUser(userInfo: any) {
        return axios.post(
            'auth/register',
            userInfo
        ).then(value => {
            console.log(value);
        }).catch(err => {
            return err
        })
    }

    async loginUser(userInfo: ILogin) {
        return axios.post(
            'auth/login',
            userInfo
        ).then((value: any) => {
            if (value.token) {
                localStorage.setItem('token', value.token);
                localStorage.setItem('username', value.username);
            }
            return value;
        }).catch((err: any) => {
            throw err;
        })
    }

    async findUsers(query: any) {
        return axios.post('user/findAll', query).then((users: any) => {
            return users.data
        }).catch(err => {
            throw err;
        })
    }
}
