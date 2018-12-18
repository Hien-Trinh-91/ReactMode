import * as React from 'react';
import userStore from '../../Store/user.store';


class UserInfoComponent extends React.Component<{}, any> {
    private _userStore: any;
    constructor(props: any) {
        super(props)
        this.state = {
            username: localStorage.getItem('username')
        }
    }
    handleUsername = (event: any) => {
        this.setState({ username: event.target.value });
    }
    handleUpdate = (event: any) => {
        event.preventDefault();
        userStore.dispatch({ username: this.state.username });
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group w-50">
                        <div className="form-group">
                            <label >Username</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={this.handleUsername} placeholder="Username" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleUpdate}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserInfoComponent;