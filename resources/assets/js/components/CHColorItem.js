import React, { Component } from 'react';

import ColorCode from './ColorCode';

class CHColorItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eye: false
        }
    }

    render() {
        return (
            <div className="col-md-2 color" style={{ background: this.props.hex }}
                onMouseEnter={() => this.setState({ eye: true })}
                onMouseLeave={() => this.setState({ eye: false })}>
                <ColorCode colorType={this.props.hex} eye={this.state.eye} />
                <ColorCode colorType={this.props.rgb} eye={this.state.eye} />
                <ColorCode colorType={this.props.hsl} eye={this.state.eye} />
            </div>
        );
    }
}

export default CHColorItem;