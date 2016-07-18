import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action-creators';


export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
      const activeChallenge = this.props.activeChallenge
      const username = this.props.username
      const challengeID = this.props.challengeID
    
      this.daemon = setInterval( function() {
        if (!challengeID) {
          activeChallenge(username);
        }
      }, 2000 );
    }

    doChallenge() {
      this.props.challengePlayer(this.props.playerName, this.props.username);
        //Dispatcher.dispatch( { type: 'challenge-player', challengedPlayer : this.props.player.playerName });
    }

    render() {
        var challenge = function() {
            this.doChallenge();
        }.bind(this);

        var challengeButton = this.props.canChallenge ? <button onClick={challenge}>Challenge</button> : '';

        return (
            <li>
                {this.props.playerName}
                <br/>
                {challengeButton}
            </li>
        );
    }
}

function mapStateToProps(state) {
  return state.toJSON();
}

export default connect(mapStateToProps, actionCreators)(Player);
