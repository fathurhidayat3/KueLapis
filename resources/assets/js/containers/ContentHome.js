import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import CHModalPalette from '../components/CHModalPalette';
import CHColor from '../components/CHColor';
import CHPalette from '../components/CHPalette';
import CHGradient from '../components/CHGradient';
import LoadingSpinner from '../components/LoadingSpinner';

class ContentHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: [],
            palette: [],
            gradient: [],
            loading: false,
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        // http://192.168.43.245:8001
        axios.get('http://localhost:8000/getall')
            .then(response => {
                this.setState({
                    color: response.data.color,
                    palette: response.data.palette,
                    gradient: response.data.gradient,
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
                <CHPanel title="Favourite Colors" linkto="/color">
                    {loading ? <LoadingSpinner /> :
                        <CHColor color={this.state.color} />
                    }
                </CHPanel>

                <CHPanel title="Favourite Palettes" linkto="/palette">
                    {loading ? <LoadingSpinner /> :
                        <CHPalette palette={this.state.palette} />
                    }
                </CHPanel>

                <CHPanel title="Favourite Gradients" linkto="/gradient">
                    {loading ? <LoadingSpinner /> :
                        <CHGradient gradient={this.state.gradient} />
                    }
                </CHPanel>
            </div>
        );
    }
}

export default ContentHome;