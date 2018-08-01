import React, { Component } from 'react';

class CHColorItem extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2 color" style={{background:this.props.hex}}>
                    <code data-clipboard-text={this.props.hex}>{this.props.hex}</code>
                    <code data-clipboard-text={this.props.rgb}>{this.props.rgb}</code>
                    <code data-clipboard-text={this.props.hsl}>{this.props.hsl}</code>
                </div>
            </div>
        );
    }
}

export default CHColorItem;