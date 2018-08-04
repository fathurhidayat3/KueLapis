import React, { Component } from 'react';
import { connect } from 'react-redux';

import CHPanel from '../components/CHPanel';
import ColorCode from '../components/ColorCode';

import { panelStatus } from '../actions/AppAction';

class DetailGradient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {}
    }
  }

  componentWillMount() {
    let id = this.props.location.pathname.split('/')[2];
    axios.get('http://localhost:8000/getgradients/' + id)
      .then(response => {
        this.setState({
          selected: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
  render() {
    const selected = this.state.selected;

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
})

const mapDispatchToProps = (dispatch) => ({
  panelStatus: dispatch(panelStatus(2))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailGradient);