import React, { Component } from 'react';

import CHGradientItem from './CHGradientItem';

class CHGradient extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <div className="row text-center">
            {this.props.gradient.map(data =>
                <CHGradientItem from={data.from} to={data.to} key={data.id} />
            )}
            </div>
            </div>
        );
    }
}

export default CHGradient;


{/* <div className="col-md-2 ec-gradient" style={{ 
        background: 'linear-gradient(to bottom, #5555ffff, #162d50ff)'
    }}>
    <span className="ec-palette-tool">
        <a onClick={this.showPalette.bind(this, 'palette 1')}>
        <i className="fa fa-eye"></i></a>
    </span>
</div>
<div className="col-md-2 ec-gradient" style={{ 
        background: 'linear-gradient(to bottom, #c8b7b7ff, #f29d53ff)'
    }}>
    <span className="ec-palette-tool">
        <a onClick={this.showPalette.bind(this, 'palette 1')}>
        <i className="fa fa-eye"></i></a>
    </span>
</div>
<div className="col-md-2 ec-gradient" style={{ 
        background: 'linear-gradient(to bottom, #ffe680ff, #f29d53ff)'
    }}>
    <span className="ec-palette-tool">
        <a onClick={this.showPalette.bind(this, 'palette 1')}>
        <i className="fa fa-eye"></i></a>
    </span>
</div>
<div className="col-md-2 ec-gradient" style={{ 
        background: 'linear-gradient(to bottom, #1CB5E0, #a777ffff)'
    }}>
    <span className="ec-palette-tool">
        <a onClick={this.showPalette.bind(this, 'palette 1')}>
        <i className="fa fa-eye"></i></a>
    </span>
</div>
<div className="col-md-2 ec-gradient" style={{ 
        background: 'linear-gradient(to bottom, #eeeeeeff, #c8b7b7ff)'
    }}>
    <span className="ec-palette-tool">
        <a onClick={this.showPalette.bind(this, 'palette 1')}>
        <i className="fa fa-eye"></i></a>
    </span>
</div>
<div className="col-md-2 ec-gradient" style={{ 
        background: 'linear-gradient(to bottom, #ff5555ff, #000046)'
    }}>
    <span className="ec-palette-tool">
        <a onClick={this.showPalette.bind(this, 'palette 1')}>
        <i className="fa fa-eye"></i></a>
    </span>
</div> */}