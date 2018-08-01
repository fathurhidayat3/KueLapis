import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CHGradientItem extends Component {
    showPalette(param) {
        alert(param)
    }
    render() {
        return (
            <div>
                <div className="col-md-2 gradient" style={{
                    background: 'linear-gradient(to bottom,'
                        + this.props.from + ', ' + this.props.to + ')'
                }}>
                    <span className="eye_button">
                        <Link to={"/gradient/" + this.props.id}>
                            <i className="fa fa-eye"></i>
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default CHGradientItem;