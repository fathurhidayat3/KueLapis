import React, { Component } from 'react';

import CHPanel from '../components/CHPanel';
import CHGradient from '../components/CHGradient';
import LoadingSpinner from '../components/LoadingSpinner';

class ContentGradient extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gradient : [],
            loading : false
        }
    }

    componentWillMount(){
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
        const {data, loading} = this.state;
        return (
            <div>
            <CHPanel title="All Gradient" linkto="">
                {loading ? <LoadingSpinner /> : 
                    <CHGradient gradient={this.state.gradient}/>
                }
            </CHPanel>
            </div>
        );
    }
}

export default ContentGradient;