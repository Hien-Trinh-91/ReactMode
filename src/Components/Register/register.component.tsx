import * as React from 'react';
import { IRegister } from '../../Interface/IModel';
import { UserService } from '../../Service';
import { IUserService } from '../../Interface/IService';
class RegisterComponent extends React.Component<{}, IRegister> {
    private avatar: File
    private _userService: IUserService;
    constructor(props: any) {
        super(props)
        this.state = {
            Username: '',
            Password: '',
            CPassword: '',
            Fullname: '',
            Role: 1,
            FormError: {
                UsernameError: '',
                PasswordError: '',
                CPasswordError: '',
                FullnameError: ''
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
        const field = event.target.name;
        const value = event.target.value;
        const fieldError = field + 'Error';
        if (!value) {
            return this.setState({ ...this.state, FormError: { ...this.state.FormError, [fieldError]: 'This field is not empty' }, FormValid: false });
        }
        const FieldHasSpace = this.hasWhiteSpace(value);
        if (FieldHasSpace) {
            return this.setState({ ...this.state, FormError: { ...this.state.FormError, [field + 'Error']: 'This field does not alow whitespace' }, FormValid: false });
        }
        this.setState({ ...this.state, FormError: { ...this.state.FormError, [field + 'Error']: '' } }, () => {
            return this.validateForm();
        });
    }
    hasWhiteSpace = (s: any) => {
        return s.indexOf(' ') >= 0;
    }
    validateForm = () => {
        const error = !!this.state.FormError.UsernameError || !!this.state.FormError.PasswordError || !!this.state.FormError.CPasswordError;
        const unempty = !!this.state.Username && !!this.state.Password && !!this.state.CPassword;
        const valid = !error && unempty;
        this.setState({ ...this.state, FormValid: valid });
    }

    submitForm = (event: any) => {
        event.preventDefault();
        if (this.state.CPassword !== this.state.Password) {
            return this.setState({ ...this.state, FormError: { ...this.state.FormError, CPasswordError: 'Password does not match' } });
        }
        const userInfo = new FormData();
        userInfo.append('username', this.state.Username);
        userInfo.append('password', this.state.Password);
        userInfo.append('fullName', this.state.Fullname);
        userInfo.append('role', this.state.Role.toString());
        userInfo.append('avatar', this.avatar)
        this._userService.createUser(userInfo);
    }
    selectRole = (event: any) => {
        const role = event.target.value;
        this.setState({
            ...this.state, Role: role
        })
    }
    setAvatar = (event: any) => {
        this.avatar = event.target.files[0]
    }
    render() {
        const roles = [
            { label: 'Admin', value: 2 },
            { label: 'User', value: 3 }]
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
                        <label htmlFor="fullname" className="col-2">Full Name</label>
                        <div className="col-4">
                            <input className="w-100" type="text" name="Fullname" onChange={this.handleInput} value={this.state.Fullname} onBlur={this.handleBlur} />
                            <span>{this.state.FormError.FullnameError}</span>
                        </div>
                    </div >
                    <div className="row justify-content-center mt-2">
                        <label htmlFor="password" className="col-2">Password</label>
                        <div className="col-4">
                            <input className="w-100" type="password" name="Password" onChange={this.handleInput} value={this.state.Password} onBlur={this.handleBlur} />
                            <span>{this.state.FormError.PasswordError}</span>
                        </div>
                    </div >
                    <div className="row justify-content-center mt-2">
                        <label htmlFor="confirmPassword" className="col-2">Confirm Password</label>
                        <div className="col-4">
                            <input className="w-100" type="password" name="CPassword" onChange={this.handleInput} value={this.state.CPassword} onBlur={this.handleBlur} />
                            <span>{this.state.FormError.CPasswordError}</span>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <label htmlFor="confirmPassword" className="col-2">Role</label>
                        <div className="col-4">
                            <select onChange={this.selectRole}>
                                {roles.map((role: any) => {
                                    return <option value={role.value} key={role.value}>{role.label}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <label htmlFor="confirmPassword" className="col-2">Avatar</label>
                        <div className="col-4">
                            <input type="file" onChange={this.setAvatar} accept="image/*" />
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

export default RegisterComponent