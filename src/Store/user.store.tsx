import * as Rx from 'rxjs';
export interface IUser {
    username: string
}

export interface IUserStore {
    dispatch(user: IUser): void;
    subscribe(callback: any): void
}
class UserStore implements IUserStore {
    private observer: any;
    private username: string;
    constructor() {
        this.username = localStorage.getItem('username');
        this.observer = new Rx.BehaviorSubject({ username: this.username });
    }
    dispatch = (user: IUser) => {
        this.observer.next(user);
    }
    subscribe = (callback: any) => {
        this.observer.subscribe((user: IUser) => {
            if (user.username) {
                localStorage.setItem('username', user.username);
                callback(user);
            }
        })
    }
}

export default new UserStore;