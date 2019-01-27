import * as React from 'react'
import { ITeamService } from '../../../Interface/IService';
import { TeamService } from '../../../Service';
export class TeamsComponent extends React.Component<any, any> {
    private teamService: ITeamService
    constructor(props: any) {
        super(props);
        this.state = {
            teamName: ''
        }
        this.teamService = TeamService.Instance();
    }
    createTeam = (event: any) => {
        this.teamService.createTeam(this.state.teamName)
    }
    handleTeamChange = (event: any) => {
        this.setState({
            ...this.props, teamName: event.target.value
        })
    }
    render() {
        return (
            <div className="col mt-2">
                <input type="text" placeholder="Team name" className="p-2" onChange={this.handleTeamChange} value={this.state.teamName} />
                <button className="btn btn-success ml-3" onClick={this.createTeam}>
                    Submit
                </button>
            </div>
        )
    }
}