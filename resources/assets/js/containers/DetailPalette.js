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
        yey
      </CHPanel>
    );
  }
}

export default DetailPalette;