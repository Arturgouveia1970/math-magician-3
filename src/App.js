import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Calculator from './components/calculator';

class DisplayCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default DisplayCalc;
