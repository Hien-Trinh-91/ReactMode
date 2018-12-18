import * as React from 'react';
import { Link } from 'react-router-dom';
import { ILogin } from '../../Interface/IModel';
import './header.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userStore, { IUser } from '../../Store/user.store';
import {
    faAngleDoubleDown, faSearch, faBell, faLayerGroup, faCalendarCheck, faRocket, faBookReader, faCalendarPlus, faBinoculars, faShoppingBasket, faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
class Header extends React.Component<{}, ILogin> {
    private User = userStore;
    private quicActions = [
        {
            icon: faCalendarPlus,
            url: '/1',
            title: 'Add New Notes'
        },
        {
            icon: faBinoculars,
            url: '/2',
            title: 'Create New Events'
        },
        {
            icon: faShoppingBasket,
            url: '/3',
            title: 'Create New Menus'
        },
        {
            icon: faLaptopCode,
            url: '/4',
            title: 'Add New Assets'
        }
    ]
    private actionItems = this.quicActions.map(action => {
        return (
            <div className="action-item" key={action.url}>
                <Link to={action.url}>
                    <div className="action-item-content">
                        <FontAwesomeIcon icon={action.icon} />
                        <div>
                            {action.title}
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    componentDidMount() {
        this.User.subscribe((user: IUser) => {
            this.setState({ Username: user.username })
        })
    }
    constructor(props: any) {
        super(props)
        this.state = {
            Username: null,
            Password: ''
        }
    }
    logout = (event: any) => {
        event.preventDefault();
        localStorage.clear();
    }
    render() {
        return (
            <nav className="navbar header">
                <div className="d-flex">
                    <div className="dropdown report pr-3 pl-3">
                        <div className="report" id="dropdownReport" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Report
                            <FontAwesomeIcon icon={faAngleDoubleDown} className="ml-3" />
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownReport">
                            <Link to="/dsm" className="dropdown-item">
                                <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" />
                                DSM Report
                            </Link>
                            <Link to="/leaving" className="dropdown-item">
                                <FontAwesomeIcon icon={faRocket} className="mr-3" />
                                Leaving Report
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown action pr-3 pl-3">
                        <div className="action" id="dropdownAction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                            <FontAwesomeIcon icon={faAngleDoubleDown} className="ml-3" />
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownAction">
                            <Link to="/dsm" className="dropdown-item">
                                <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" />
                                DSM Report
                            </Link>
                            <Link to="/leaving" className="dropdown-item">
                                <FontAwesomeIcon icon={faRocket} className="mr-3" />
                                Leaving Report
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex ml-auto ">
                    <div className="tool">
                        <FontAwesomeIcon icon={faSearch} className="ml-2 mr-2" />
                        <FontAwesomeIcon icon={faBell} className="ml-2 mr-2" />
                        <div className="dropdown quickAction">
                            <div className="" id="dropdownQuickAction" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={faLayerGroup} className="ml-2 mr-2" />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownQuickAction">
                                <div className="quickAction-title">
                                    Quick Actions
                                </div>
                                <div className="quickAction-content row no-gutters">
                                    {this.actionItems}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="userInfo">
                        <img className="user-image" src={require('../../Assets/Images/Header/user.jpg')} alt="" />
                        <div className="dropdown d-inline-block">
                            <div className="dropdown-toggle" id="dropdownInfo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.Username}
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownInfo">
                                <a className="dropdown-item" href="" onClick={this.logout}>Log out</a>
                                <Link to="/edituser" className="dropdown-item">Edit user</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header