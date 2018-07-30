import React, { Component } from 'react';

class CHPaletteItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-2 ec-palette">
                <span className="ec-palette-tool">
                    <a data-toggle="modal" onClick={
                        this.props.getdata.bind(this,
                            this.props.code1,
                            this.props.code2,
                            this.props.code3,
                            this.props.code4, )
                    }>
                        <i className="fa fa-eye"></i>
                        {/* href='#modal-palette' */}
                    </a>
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

// how to pass data to modal
// from clicked palette ?

// try to send using conventional way
// send to props parent
// until reach ContentPalette and pass variable to CHModalPalette props