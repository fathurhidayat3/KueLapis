import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CHPanel from '../components/CHPanel';
import ColorCode from '../components/ColorCode';

class DetailGradient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selected = this.props.gradient.selected;

    return (
      <CHPanel title="Selected Gradient" linkto="">
        <div className="row panel__detail">
          <div className="col-md-12 panel__gradient" style={{
            background: 'linear-gradient(to right,'
              + selected.from + ', ' + selected.to + ')'
          }}>
            <div className="col-md-2 gradient__item">
              <ColorCode customClass="gradient__color--left" colorType="#e17055" />
              <ColorCode customClass="gradient__color--left" colorType="rgb(50, 64, 255)" />
              <ColorCode customClass="gradient__color--left" colorType="hsl(236, 100%, 60%)" />
            </div>
            <div className="col-md-2 gradient__item">
              <ColorCode customClass="gradient__color--right" colorType="#e17055" />
              <ColorCode customClass="gradient__color--right" colorType="rgb(50, 64, 255)" />
              <ColorCode customClass="gradient__color--right" colorType="hsl(236, 100%, 60%)" />
            </div>
          </div>
        </div>
      </CHPanel>
    );
  }
}

const mapStateToProps = (state) => ({
  gradient: state.GradientReducer
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailGradient);