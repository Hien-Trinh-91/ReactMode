import axios from 'axios';

export class TeamService {
    private static _instance: TeamService
    constructor() { }

    public static Instance() {
        return this._instance || (this._instance = new this());
    }
    createTeam(name: string) {
        return axios.post(
            'team/create',
            { name }
        ).then(value => {
            console.log(value)
        }).catch(err=>{
            return err;
        })
    }
}