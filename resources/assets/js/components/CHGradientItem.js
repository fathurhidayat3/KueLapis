import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CHGradientItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eye: false
        }
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
                    <Link to={"/gradient/" + this.props.id}>
                        <i className="fa fa-eye"></i>
                    </Link>
                </span>
            </div>
        );
    }
}

export default CHGradientItem;