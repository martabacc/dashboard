import React from 'react';
import MOCK_DATA from '../MOCK_DATA';
import Main from './TransactionMain';
import Sidebar from './Sidebar';
/*
*  Holds Container of the entire body
* */
const Body = (props) => (
    <div className="container-fluid">
        <div className="row">
            <Sidebar name={'Ronauli Silva'}/>
            <Main injectData={MOCK_DATA}/>
        </div>
    </div>
);

export default Body;
