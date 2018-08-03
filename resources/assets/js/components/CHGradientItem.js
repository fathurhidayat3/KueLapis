import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { detailGradient } from '../actions/GradientAction';

class CHGradientItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eye: false
        }
    }

    showDetail(selected) {
        this.props.detailGradient(selected);
    }

    render() {
        return (
            <div className="col-md-2 gradient"
                onMouseEnter={() => this.setState({ eye: true })}
                onMouseLeave={() => this.setState({ eye: false })}
                style={{
                    background: 'linear-gradient(to right,'
                        + this.props.from + ', ' + this.props.to + ')'
                }}>
                <span className="eye_button" style={this.state.eye ? {display: 'block'} : {display: 'none'}}>
                    <Link to={"/gradient/" + this.props.id}
                    onClick={() => this.showDetail({
                        id: this.props.id,
                        from: this.props.from,
                        to: this.props.to
                    })}>
                        <i className="fa fa-eye"></i>
                    </Link>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // gradient: state.GradientReducer
})

const mapDispatchToProps = (dispatch) => ({
    detailGradient: (selected) => dispatch(detailGradient(selected))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CHGradientItem);