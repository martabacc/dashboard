import React, { Component } from 'react';
import Body from './components/Body';
import TopNavigation from './components/TopNavigation';

class App extends Component {
    render () {
        return (
            <div>
                <TopNavigation/>
                <Body/>
            </div>
        );
    }
}

export default App;
