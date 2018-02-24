import React from 'react';
/*
*  Responsible for SidebarProfile View
*  (like avatar, user name, etc)
* */
const SidebarProfile = (props) => (
    <div
        className="nav-profile sidebar-profile sidebar-heading d-flex align-items-center px-3 text-muted">
        <img
            src="https://scontent-sit4-1.xx.fbcdn.net/v/t31.0-8/18836649_1548842371824510_7265587565617731541_o.jpg?oh=2dcb9f8e935c716e84293b9ed15e7b7f&oe=5B0A572A"
            alt="profile-avatar"
            className="img-circle" style={{ width: '5em' }}/>
        <p className="mt-5 ml-2">Hello, <span id="profile-name">
            <br/>{props.name}</span>!</p>
    </div>);

export default SidebarProfile;
