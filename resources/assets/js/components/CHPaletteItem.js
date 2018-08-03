import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { detailPalette } from '../actions/PaletteAction';

class CHPaletteItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eye: false
        }
    }

    showDetail(selected) {
        this.props.detailPalette(selected);
    }

    render() {
        return (
            <div className="col-md-2 palette__col"
                onMouseEnter={() => this.setState({ eye: true })}
                onMouseLeave={() => this.setState({ eye: false })}>
                <span className="eye_button" style={this.state.eye ? { display: 'block' } : { display: 'none' }}>
                    <Link to={"/palette/" + this.props.id}
                        onClick={() => this.showDetail({
                            id: this.props.id,
                            code1: this.props.code1,
                            code2: this.props.code2,
                            code3: this.props.code3,
                            code4: this.props.code4
                        })}>
                        <i className="fa fa-eye"></i>
                    </Link>
                </span>

                <div className="col-md-3 palette__item" style={{ background: this.props.code1 }}></div>
                <div className="col-md-3 palette__item" style={{ background: this.props.code2 }}></div>
                <div className="col-md-3 palette__item" style={{ background: this.props.code3 }}></div>
                <div className="col-md-3 palette__item" style={{ background: this.props.code4 }}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // palette: state.PaletteReducer
})

const mapDispatchToProps = (dispatch) => ({
    detailPalette: (selected) => dispatch(detailPalette(selected))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CHPaletteItem);