import React, { Component } from 'react';

class CHColorItem extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2 ec-color" style={{background:this.props.hex}}>
                    <code>{this.props.hex}</code><br/>
                    <code>{this.props.rgb}</code><br/>
                    <code>{this.props.hsl}</code><br/>
                </div>
            </div>
        );
    }
}

export default CHColorItem;