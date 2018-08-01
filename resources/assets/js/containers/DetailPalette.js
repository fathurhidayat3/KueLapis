import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import CHPanel from '../components/CHPanel';

class DetailPalette extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <CHPanel title="Selected Palette" linkto="">
        <div className="row panel__detail text-center">
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(165, 94, 234)' }}>
            <code data-clipboard-text="#55efc4">#55efc4</code>
            <code data-clipboard-text="rgb(50, 64, 255)">rgb(50, 64, 255)</code>
            <code data-clipboard-text="hsl(236, 100%, 60%)">hsl(236, 100%, 60%)</code>
          </div>
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(136, 84, 208)' }}>
            <code data-clipboard-text="#e17055">#e17055</code>
            <code data-clipboard-text="rgb(50, 64, 255)">rgb(50, 64, 255)</code>
            <code data-clipboard-text="hsl(236, 100%, 60%)">hsl(236, 100%, 60%)</code>
          </div>
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(255, 255, 255)' }}>
            <code data-clipboard-text="#b2bec3">#b2bec3</code>
            <code data-clipboard-text="rgb(50, 64, 255)">rgb(50, 64, 255)</code>
            <code data-clipboard-text="hsl(236, 100%, 60%)">hsl(236, 100%, 60%)</code>
          </div>
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(255, 177, 66)' }}>
            <code data-clipboard-text="#00b894">#00b894</code>
            <code data-clipboard-text="rgb(50, 64, 255)">rgb(50, 64, 255)</code>
            <code data-clipboard-text="hsl(236, 100%, 60%)">hsl(236, 100%, 60%)</code>
          </div>
        </div>
      </CHPanel>
    );
  }
}

export default DetailPalette;