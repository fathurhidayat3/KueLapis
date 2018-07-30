import React, { Component } from 'react';

import CHPaletteItem from './CHPaletteItem';

class CHPalette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            param1: '',
            param2: '',
            param3: '',
            param4: '',
        }
    }

    getdata(params1, params2, params3, params4) {
        this.setState({
            param1: params1,
            param2: params2,
            param3: params3,
            param4: params4,
        }, function () {
            alert(this.state.param1);
        });
    }

    render() {
        return (
            <div>
                <div className="row text-center">
                    {this.props.palette.map(data =>
                        <CHPaletteItem code1={data.code1} code2={data.code2} code3={data.code3}
                            code4={data.code4} key={data.id} getdata={this.getdata.bind(this)} />
                    )}
                </div>
            </div>
        );
    }
}

export default CHPalette;