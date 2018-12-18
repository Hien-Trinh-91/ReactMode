import * as React from 'react';
import { IUserService } from '../../Interface/IService';
import { UserService } from '../../Service';
import DatePicker from 'react-datepicker';
import './dashboard.component.scss'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { WithContext as ReactTags } from 'react-tag-input';
import BehaviorComponent from '../Behavior/behavior.component';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../Utils/asyncComponent';
import TeamsComponent from './Teams/teams.component';
const AsyncBehavior = asyncComponent(() => {
    return import('../Behavior/behavior.component');
});
const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
class DashboardComponent extends React.Component<{}, any> {
    private _userService: IUserService
    constructor(props: any) {
        super(props)
        this._userService = UserService.Instance();
        this.state = {
            startDate: null,
            tags: [],
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: "Thailand", text: "Thailand" },
                { id: "India", text: "India" }
            ]
        }
    }
    handleChange = (event: any) => {
        this.setState({
            startDate: event
        });
    }
    handleDelete = (i: any) => {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag: any, index: any) => index !== i),
        });
    }

    handleAddition = (tag: any) => {
        this.setState((state: any) => ({ tags: [...state.tags, tag] }));
    }

    handleDrag = (tag: any, currPos: any, newPos: any) => {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }
    render() {
        const { tags, suggestions } = this.state;
        return (
            <div className="dashboard">
                <h2>
                    Dashboard
                </h2>
                <div className="row p-2">
                    <TeamsComponent/>
                    <TeamsComponent/>
                </div>
            </div>
        )
    }
}
export default DashboardComponent