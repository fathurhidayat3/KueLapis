import React, { Component } from 'react';

class CHGradientItem extends Component {
    showPalette(param) {
        alert(param)
    }
    render() {
        return (
            <div>
                <div className="col-md-2 ec-gradient" style={{
                    background: 'linear-gradient(to bottom,'
                        + this.props.from + ', ' + this.props.to + ')'
                }}>
                    <span className="ec-palette-tool">
                        <a onClick={this.showPalette.bind(this, 'palette 1')}>
                            <i className="fa fa-eye"></i></a>
                    </span>
                </div>
            </div>
        );
    }
}

export default CHGradientItem;