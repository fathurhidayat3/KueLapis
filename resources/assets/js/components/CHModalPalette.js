import React, { Component } from 'react';

class CHModalPalette extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modal-palette" ref="modalpalette"
                    style={{ background: 'linear-gradient(#edb64f, #9e6323)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">{this.props.title}</h4>
                            </div>
                            <div className="modal-body">
                                {/* {this.state.value} */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CHModalPalette;