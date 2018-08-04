import React, { Component } from 'react';
import { connect } from 'react-redux';

import CHPanel from '../components/CHPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import CHGradientItem from '../components/CHGradientItem';

import { panelStatus } from '../actions/AppAction';

class ContentGradient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gradient: [],
            loading: false
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        axios.get('http://localhost:8000/getgradients')
            .then(response => {
                this.setState({
                    gradient: response.data,
                    loading: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { loading, gradient } = this.state;
        
        return (
            <CHPanel title="All Gradient">
                {loading ? <LoadingSpinner /> :
                    <div className="row text-center">
                        {gradient.map(data =>
                            <CHGradientItem
                                from={data.from} to={data.to}
                                key={data.id} id={data.id} />
                        )}
                    </div>
                }
            </CHPanel>
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
)(ContentGradient);