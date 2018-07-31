import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import HeaderNavigation from './components/HeaderNavigation'
import ConnectedSearch from './components/Search'

import './index.css';

class App extends Component {

    render() {

        return (
           <div className='App'>
                <div>
                    <HeaderNavigation />
                </div>
                <div>
                    <Jumbotron>
                        <h1> Writers Database </h1>
                        <p> Find your favorite writer's info </p>
                    </Jumbotron>
                </div>
                <div>
                    <ConnectedSearch/>
                </div>
            </div>
        );
    }
}

export default App;