import React, { Component } from 'react';
import Navbar from './Navbar';

import Content from './Content';

class Index extends Component {
    render() {
        return (
            <main>
                <Navbar />
                <Content />
            </main>
        );
    }
}

export default Index;