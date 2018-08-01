import React, { Component } from 'react';

class ColorCode extends Component {
  render() {
    return (
      <code
        data-clipboard-text={this.props.colorType}
        className={this.props.customClass}
        style={this.props.eye ? { visibility: 'visible' } : { visibility: 'hidden' }}
      >{this.props.colorType}</code>
    );
  }
}

ColorCode.defaultProps = {
  eye: true,
  customClass: {}
}

export default ColorCode;