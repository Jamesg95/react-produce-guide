import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent'
import MainContent from './MainContent'

class Main extends Component {
    render() {
        return(
            <div>
                <NavbarComponent />
                <MainContent />
            </div>
        )
    }
}

export default Main;