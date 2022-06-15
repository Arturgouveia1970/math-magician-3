import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Calculator from './components/calculator';
import Quotes from './components/Quote';
import NavBar from './components/NavBar';
import Home from './components/Home';

class DisplayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default DisplayPage;
