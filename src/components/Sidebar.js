import React from 'react';
import Profile from './SidebarProfile';

/*
*  Responsible for SidebarProfile & Menus Management
* */
const Sidebar = (props) => (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <Profile name={'Ronauli Silva'}/>
        </div>
        <h6
            className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
            <span>Menu</span>
            <a className="d-flex align-items-center text-muted">
                <span data-feather="plus-circle" />
            </a>
        </h6>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active">
                    <i className="fa fa-home" />
          Dashboard
                </a>
            </li>
        </ul>
    </nav>
);

export default Sidebar;
