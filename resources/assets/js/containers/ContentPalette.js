import React, { Component } from 'react';
import { connect } from 'react-redux';

import CHPanel from '../components/CHPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import CHPaletteItem from '../components/CHPaletteItem';
import Pagination from '../components/Pagination';

import { panelStatus } from '../actions/AppAction';

class ContentPalette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            palette: [],
            loading: false,
            paginator: {}
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        axios.get('http://localhost:8000/getpalettes')
            .then(response => {
                this.setState({
                    palette: response.data.data,
                    loading: false,
                    paginator: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { loading, palette } = this.state;

        return (
            <div>
                <CHPanel title="All Palettes">
                    {loading ? <LoadingSpinner /> :
                        <div className="row text-center">
                            {palette.map(data =>
                                <CHPaletteItem
                                    code1={data.code1} code2={data.code2} code3={data.code3}
                                    code4={data.code4} key={data.id} id={data.id}
                                    location={this.props.location} />
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
)(ContentPalette);