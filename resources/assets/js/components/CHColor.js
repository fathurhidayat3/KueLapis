import React, { Component } from 'react';

import CHColorItem from './CHColorItem';

class CHColor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row text-center">
                    {this.props.color.map(data =>
                        <CHColorItem hex={data.hex} rgb={data.rgb} hsl={data.hsl} key={data.id} />
                    )}
                </div>
            </div>
        );
    }
}

export default CHColor;