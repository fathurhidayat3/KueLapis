import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import CHPaletteItem from '../components/CHPaletteItem';

class ContentPalette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            palette: [],
            loading: false
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        axios.get('http://localhost:8000/getpalettes')
            .then(response => {
                this.setState({
                    palette: response.data,
                    loading: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { loading, palette } = this.state;

        return (
            <CHPanel title="All Palettes" linkto="">
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
        );
    }
}

export default ContentPalette;