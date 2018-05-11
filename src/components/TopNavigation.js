import React from 'react';
/*
*  Responsible for Top Navigation part of the page
* */
const TopNavigation = (props) => (
    <nav className="navbar navbar-dark sticky-top bg-dark p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0">Financial Service Example
      Website</a>
        <div className="navbar-nav px-3 pull-left">
            <button type="button" className="btn btn-primary btn-sm mr-2" id="notificationButton">
                <i className="fa fa-bell" />
        Notifications
                <span className="badge badge-light" id="notif-count">4</span>
            </button>
            <button type="button" className="btn btn-primary btn-sm" id="signOutButton">
                <i className="fa fa-sign-out" />
        Sign out
            </button>
        </div>
    </nav>
);

export default TopNavigation;
