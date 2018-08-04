import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CHPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panel_items: ''
        }
    }

    componentWillMount() {

    }

    panelItem(panel_status) {
        switch (panel_status) {
            case 0:
                return <Link to={this.props.linkto}>See More</Link>;
            case 1:
                return <div>
                    <Link to="/"><i className="fa fa-plus"></i></Link>&emsp;
                    <a data-toggle="modal" href='#modal-filter'><i className="fa fa-filter"></i></a>
                </div>;
            // return null;
            case 2:
                return <div>
                    <a><i className="fa fa-caret-left fa-lg"></i></a>&ensp;
                    <a><i className="fa fa-caret-right fa-lg"></i></a>
                </div>;
            // return null;
            default:
                return <Link to={this.props.linkto}>See More</Link>;
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.title}
                            <span className="pull-right">
                                {this.panelItem(this.props.app.panel_status)}
                            </span>
                        </h3>
                    </div>
                    <div className="panel-body no_padding_vertical">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    app: state.AppReducer
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CHPanel);