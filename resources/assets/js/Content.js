import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContentHome from './containers/ContentHome';
import ContentColor from './containers/ContentColor';
import ContentPalette from './containers/ContentPalette';
import ContentGradient from './containers/ContentGradient';

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ContentHome} />
                <Route path="/color" component={ContentColor} />
                <Route path="/palette" component={ContentPalette} />
                <Route path="/gradient" component={ContentGradient} />
            </Switch>

        );
    }
}

export default Content;