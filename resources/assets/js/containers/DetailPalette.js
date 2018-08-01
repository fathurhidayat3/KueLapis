import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import CHPanel from '../components/CHPanel';
import ColorCode from '../components/ColorCode';

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
            <ColorCode colorType="#55efc4" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(136, 84, 208)' }}>
            <ColorCode colorType="#e17055" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(255, 255, 255)' }}>
            <ColorCode colorType="#b2bec3" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
          <div className="col-md-3 panel__palette" style={{ background: 'rgb(255, 177, 66)' }}>
            <ColorCode colorType="#00b894" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
        </div>
      </CHPanel>
    );
  }
}

export default DetailPalette;