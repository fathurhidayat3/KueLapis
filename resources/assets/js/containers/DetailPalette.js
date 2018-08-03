import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CHPanel from '../components/CHPanel';
import ColorCode from '../components/ColorCode';

class DetailPalette extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.palette);
  }

  render() {
    const selected = this.props.palette.selected;

    return (
      <CHPanel title="Selected Palette" linkto="">
        <div className="row panel__detail text-center">
          <div className="col-md-3 panel__palette" style={{ background: selected.code1 }}>
            <ColorCode colorType="#55efc4" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
          <div className="col-md-3 panel__palette" style={{ background: selected.code2 }}>
            <ColorCode colorType="#e17055" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
          <div className="col-md-3 panel__palette" style={{ background: selected.code3 }}>
            <ColorCode colorType="#b2bec3" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
          <div className="col-md-3 panel__palette" style={{ background: selected.code4 }}>
            <ColorCode colorType="#00b894" />
            <ColorCode colorType="rgb(50, 64, 255)" />
            <ColorCode colorType="hsl(236, 100%, 60%)" />
          </div>
        </div>
      </CHPanel>
    );
  }
}

const mapStateToProps = (state) => ({
  palette: state.PaletteReducer
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPalette);