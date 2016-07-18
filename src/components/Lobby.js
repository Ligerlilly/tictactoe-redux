import React from 'react';
import { connect } from 'react-redux';
import PlayerList from './PlayerList';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var thisPlayer = this.props.username;
    
    return (
      <div>
        <PlayerList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.toJSON();
}

export default connect(mapStateToProps)(Lobby);
