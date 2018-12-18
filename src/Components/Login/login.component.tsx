import * as React from 'react';
import { ILogin } from '../../Interface/IModel';
import { IUserService } from '../../Interface/IService';
import { UserService } from '../../Service';
const Check = require('./Check.png');
import './login.component.scss';

class LoginComponent extends React.Component<any, ILogin> {
    private _userService: IUserService;
    constructor(props: any) {
        super(props)
        this.state = {
            Username: '',
            Password: '',
            FormError: {
                UsernameError: '',
                PasswordError: '',
            },
            FormValid: false
        }
        this._userService = UserService.Instance();
    }
    handleInput = (event: any) => {
        const field = event.target.name;
        const value = event.target.value;
        this.setState({ ...this.state, [field]: value })
    }

    handleBlur = (event: any) => {
        const field = event.target.name + 'Error';
        const value = event.target.value;
        if (!value) {
            this.setState({ ...this.state, FormError: { ...this.state.FormError, [field]: 'This field is not empty', formValid: false } })
        } else {
            this.setState({ ...this.state, FormError: { ...this.state.FormError, [field]: '' } }, this.validateForm);
        }
    }

    validateForm = () => {
        const error = !!this.state.FormError.UsernameError || !!this.state.FormError.PasswordError;
        const unempty = !!this.state.Username && !!this.state.Password;
        const valid = !error && unempty;
        this.setState({ ...this.state, FormValid: valid });
    }
    handleCheck = (event: any) => {
        this.setState({ ...this.state, Remember: event.target.checked })
    }
    submitForm = (event: any) => {
        event.preventDefault();
        const userInfo = {
            Username: this.state.Username,
            Password: this.state.Password
        }
        this._userService.loginUser(userInfo).then(result => {
            if (result) {
                location.href = '/dashboard';
            }
        }).catch(error => {

        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <div className="row justify-content-center mt-2">
                        <label htmlFor="username" className="col-2">Username</label>
                        <div className="col-4">
                            <input className="w-100" type="text" name="Username" onChange={this.handleInput} value={this.state.Username} onBlur={this.handleBlur} />
                            <span>{this.state.FormError.UsernameError}</span>
                        </div>

                    </div >
                    <div className="row justify-content-center mt-2">
                        <label htmlFor="password" className="col-2">Password</label>
                        <div className="col-4">
                            <input className="w-100" type="password" name="Password" onChange={this.handleInput} value={this.state.Password} onBlur={this.handleBlur} />
                            <span>{this.state.FormError.PasswordError}</span>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <div>
                            Remember me
                        </div>
                        <div className="checkRemember">
                            <input type="checkbox" onChange={this.handleCheck} />
                            {this.state.Remember ? <img src={require("./Check.png")} alt="" /> :
                                <img src={require("../../Assets/Images/Uncheck.png")} alt="" />
                            }
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <button type="submit" className="btn btn-success" disabled={!this.state.FormValid}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginComponent