import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from './components/top-nav';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

connect(mapStateToProps)(App);
