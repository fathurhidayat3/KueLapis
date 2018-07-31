import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContentHome from './containers/ContentHome';
import ContentColor from './containers/ContentColor';
import ContentPalette from './containers/ContentPalette';
import ContentGradient from './containers/ContentGradient';
import DetailPalette from './containers/DetailPalette';
import DetailGradient from './containers/DetailGradient';

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ContentHome} />
                <Route path="/color" component={ContentColor} />
                <Route exact path="/palette" component={ContentPalette} />
                <Route exact path="/palette/:paletteId" component={DetailPalette} />
                <Route exact path="/gradient" component={ContentGradient} />
                <Route exact path="/gradient/:gradientId" component={DetailGradient} />
            </Switch>
        );
    }
}

export default Content;