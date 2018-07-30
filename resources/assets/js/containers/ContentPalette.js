import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import CHModalPalette from '../components/CHModalPalette';
import CHPalette from '../components/CHPalette';
import LoadingSpinner from '../components/LoadingSpinner';

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
        const { data, loading } = this.state;

        return (
            <div>
                <CHPanel title="All Palettes" linkto="">
                    {loading ? <LoadingSpinner /> :
                        <CHPalette palette={this.state.palette} />
                    }
                </CHPanel>

                <CHModalPalette title="Take me, Sir !" colors="red, blue, velvet" />
            </div>
        );
    }
}

export default ContentPalette;