import React, { Component } from 'react';
import { connect } from 'react-redux';

import CHPanel from '../components/CHPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import CHColorItem from '../components/CHColorItem';
import Pagination from '../components/Pagination';

import { panelStatus } from '../actions/AppAction';

class ContentColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: [],
            loading: false,
            paginator: {}
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get('http://localhost:8000/getcolors')
            .then(response => {
                this.setState({
                    color: response.data.data,
                    loading: false,
                    paginator: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { loading, color } = this.state;

        return (
            <div>
                <CHPanel title="All Colors">
                    {loading ? <LoadingSpinner /> :
                        <div className="row text-center">
                            {color.map(data =>
                                <CHColorItem hex={data.hex} rgb={data.rgb} hsl={data.hsl} key={data.id} />
                            )}
                        </div>
                    }
                </CHPanel>

                <Pagination paginator={this.state.paginator} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    panelStatus: dispatch(panelStatus(1))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentColor);