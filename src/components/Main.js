import React from 'react';
import Lobby from './Lobby';
import JoinInterface from './JoinInterface';
import ChallengeInterface from './ChallengeInterface';
import ActiveChallengeInterface from './ActiveChallengeInterface';
import GameBoard from './GameBoard';
import * as actionCreators from '../redux/action-creators';
import { connect } from 'react-redux';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.challengeReponseHandler = this.challengeReponseHandler.bind(this)
  }

  challengeReponseHandler(response) {
    () => {
      return this.props.activeChallengeResponse(response, this.props.challengeID)
    }
  }

  render () {
    let username = this.props.username;
    console.log(username);
    let challengedPlayer = this.props.challengedPlayer;
    let activeChallenge = this.props.activeChallenge;
    let visible = this.props.visible;
    let toShow = '';
    let challenge

    if (!this.props.challengeID) {
      switch (visible) {
        case 'roster':
        toShow = <Lobby />;
        break;
        case 'join':
        toShow = <JoinInterface/>;
        break;
        case 'challenge':
        toShow = <ChallengeInterface/>;
        break;
        case 'gameboard':
        toShow = <GameBoard/>;
        break;
        default:
        if (username) {
          toShow = <Lobby />
        } else {
          toShow = <JoinInterface joinPlayer={this.props.joinPlayer}/>;
        }
      }
    } else if (challengedPlayer === username) {
      toShow =  <ActiveChallengeInterface />;
    } else {
      toShow = <ChallengeInterface/>;
    }

    return (
      <div>
        {toShow}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.toJSON();
}

export default connect(mapStateToProps, actionCreators)(Main);
