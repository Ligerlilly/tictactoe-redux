import React, { Component } from 'react';
import TopNav from './components/TopNav';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}
