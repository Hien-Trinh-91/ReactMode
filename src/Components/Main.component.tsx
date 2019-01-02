import './Main.component.scss';
import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { History, createBrowserHistory } from 'history'
import LoginComponent from './Login';
import DashboardComponent from './Dashboard/dashboard.component';
import Header from './Header/Header.component';
import LeftSidebar from './LeftSidebar/leftSidebar.component';
import UserInfoComponent from './UserInfo/userInfo.component';
import ChartComponent from './Chart/chart.component';
import AssetsComponent from './Assets/assets.component';
import RegisterComponent from './Register';
import DragDropComponent from './DragDrop';
const history: History = createBrowserHistory();
class Main extends React.Component<{}, any> {
    componentDidMount() {
    }
    constructor(props: any, context: any) {
        super(props)
        const token = localStorage.getItem('token');
        this.state = {
            token: token
        };
    }
    render() {
        if (this.state.token) {
            return (
                <div>
                    <LeftSidebar />
                    <div className="main" id="main">
                        <Header />
                        <div className="mainContent">
                            <Switch>
                                <Route path='/dashboard' component={DashboardComponent} />
                                <Route path='/edituser' component={UserInfoComponent} />
                                <Route path='/charts' component={ChartComponent} />
                                <Route path='/assets' component={AssetsComponent} />
                                <Route path='/register' component={RegisterComponent} />
                                <Route path='/dragDrop' component={DragDropComponent} />
                                <Redirect from='*' to='/dashboard' />
                            </Switch>
                        </div>
                    </div>
                </div>

            )
        }
        return (
            <Switch>
                <Route path='/login' component={LoginComponent} />
                <Redirect from='*' to='/login' />
            </Switch>
        )

    }
}


export default Main;