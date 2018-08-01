import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import CHPanel from '../components/CHPanel';

class DetailGradient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CHPanel title="Selected Gradient" linkto="">
        <div className="row panel__detail text-center">
          <div className="col-md-12 panel__gradient" style={{
            background: 'linear-gradient(to bottom,'
              + 'rgb(255, 82, 82)' + ', ' + 'rgb(179, 57, 57)' + ')'
          }}>
          </div>
        </div>
      </CHPanel>
    );
  }
}

export default DetailGradient;