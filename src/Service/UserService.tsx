import { ILogin } from "../Interface/IModel";
import { IUserService } from "../Interface/IService";

export class UserService implements IUserService {
    private static _instance: UserService
    private constructor() {

    }
    public static Instance() {
        return this._instance || (this._instance = new this());
    }
    async createUser(userInfo: any) {
        return fetch('http://localhost:3000/auth/register', {
            method: 'POST', headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(userInfo)
        }).then(value => {
            console.log(value);
        }).catch(err => {
            return err
        })
    }

    async loginUser(userInfo: ILogin) {
        // localStorage.setItem('username', userInfo.Username)
        const loginResult: any = await fetch('http://localhost:3000/auth/login', {
            method: 'POST', headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(userInfo)
        });
        return loginResult.json().then((value: any) => {
            if (value.token){
                localStorage.setItem('token', value.token);
                localStorage.setItem('username', value.username);
            }
            return value;
        }).catch((err:any)=>{
            throw err;
        })
    }
}
