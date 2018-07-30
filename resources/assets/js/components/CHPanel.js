import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CHPanel extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.title}
                            <span className="pull-right">
                                {this.props.linkto !== "" ?
                                    <Link to={this.props.linkto}>
                                        See More
                        </Link>
                                    :
                                    <a data-toggle="modal" href='#modal-filter'><i className="fa fa-filter"></i></a>
                                }
                            </span>
                        </h3>
                    </div>
                    <div className="panel-body nopaddingtopbottom">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default CHPanel;

//bagaimana passing parameter ke component yang di masukkan
//ke parent sebagai props children ?