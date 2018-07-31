import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CHPaletteItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-2 ec-palette">
                <span className="ec-palette-tool">
                    <Link to={"/palette/" + this.props.id}
                        onClick={() => alert('yey')}>
                        <i className="fa fa-eye"></i>
                    </Link>
                </span>

                <div className="col-md-3 ec-palette-item" style={{ background: this.props.code1 }}></div>
                <div className="col-md-3 ec-palette-item" style={{ background: this.props.code2 }}></div>
                <div className="col-md-3 ec-palette-item" style={{ background: this.props.code3 }}></div>
                <div className="col-md-3 ec-palette-item" style={{ background: this.props.code4 }}></div>
            </div>
        );
    }
}

export default CHPaletteItem;