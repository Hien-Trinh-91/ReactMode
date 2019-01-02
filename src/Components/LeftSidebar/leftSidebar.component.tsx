import * as React from 'react';
import './leftSidebar.component.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarCheck, faHome, faRocket, faUsers, faLaptopCode, faBinoculars,
    faShoppingBasket, faSmile, faDirections, faAlignLeft
} from '@fortawesome/free-solid-svg-icons';
class LeftSidebar extends React.Component {
    private activeSidebar = true;
    private toggleSidebar = () => {
        const leftBar = document.getElementById('leftSidebar');
        const dashboard = document.getElementById('main');
        if (this.activeSidebar) {
            leftBar.classList.add('closed');
            dashboard.classList.add('expand');
            this.activeSidebar = false;
        } else {
            this.activeSidebar = true;
            leftBar.classList.remove('closed');
            dashboard.classList.remove('expand');
        }


    }
    render() {
        return (
            <div className="left-sidebar" id="leftSidebar">
                <div className="toggleIcon" onClick={this.toggleSidebar}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </div>
                <div className="sidebarContent">
                    <ul>
                        <li className="mainLogo">
                            <Link to="/dashboard">
                                <img src={require("../../Assets/Images/leftBar/MainLogo.png")} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <FontAwesomeIcon icon={faHome} />
                                <div>
                                    Dashboard
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/charts">
                                <FontAwesomeIcon icon={faCalendarCheck} />
                                <div>
                                    Charts
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dragDrop">
                                <FontAwesomeIcon icon={faRocket} />
                                <div>
                                    Drag Drop
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FontAwesomeIcon icon={faUsers} />
                                <div>
                                    Register
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/assets">
                                <FontAwesomeIcon icon={faLaptopCode} />
                                <div>
                                    Assets
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/events">
                                <FontAwesomeIcon icon={faBinoculars} />
                                <div>
                                    Events
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/foodOrders">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                                <div>
                                    Foor Orders
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <FontAwesomeIcon icon={faSmile} />
                                <div>
                                    About
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/foodOrders">
                                <FontAwesomeIcon icon={faDirections} />
                                <div>
                                    Help
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LeftSidebar;
