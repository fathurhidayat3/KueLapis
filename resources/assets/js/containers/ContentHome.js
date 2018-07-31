import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import CHPaletteItem from '../components/CHPaletteItem';
import CHGradientItem from '../components/CHGradientItem';
import CHColorItem from '../components/CHColorItem';

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
        const { loading, palette, gradient, color } = this.state;

        return (
            <div>
                <CHPanel title="Favourite Colors" linkto="/color">
                    {loading ? <LoadingSpinner /> :
                        <div className="row text-center">
                            {color.map(data =>
                                <CHColorItem hex={data.hex} rgb={data.rgb} hsl={data.hsl} key={data.id} />
                            )}
                        </div>
                    }
                </CHPanel>

                <CHPanel title="Favourite Palettes" linkto="/palette">
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

                <CHPanel title="Favourite Gradients" linkto="/gradient">
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
            </div>
        );
    }
}

export default ContentHome;