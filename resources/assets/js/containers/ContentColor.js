import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import CHColorItem from '../components/CHColorItem';

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
        const { loading, color } = this.state;

        return (
            <CHPanel title="All Colors" linkto="">
                {loading ? <LoadingSpinner /> :
                    <div className="row text-center">
                        {color.map(data =>
                            <CHColorItem hex={data.hex} rgb={data.rgb} hsl={data.hsl} key={data.id} />
                        )}
                    </div>
                }
            </CHPanel>
        );
    }
}

export default ContentColor;