import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import CHColor from '../components/CHColor';
import LoadingSpinner from '../components/LoadingSpinner';

class ContentColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get('http://localhost:8000/getcolors')
            .then(response => {
                this.setState({
                    color: response.data,
                    loading: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { data, loading } = this.state;

        return (
            <div>
                <CHPanel title="All Colors" linkto="">
                    {loading ? <LoadingSpinner /> :
                        <CHColor color={this.state.color} />
                    }
                </CHPanel>
            </div>
        );
    }
}

export default ContentColor;