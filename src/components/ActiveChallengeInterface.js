import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action-creators';

export default class ActiveChallageInterface extends React.Component {
  constructor(props) {
    super(props);
    this.challengeResponseHandler = this.challengeResponseHandler.bind(this)
  }

  challengeResponseHandler(response) {
    const challengeID = this.props.challengeID
    const activeChallengeResponse = this.props.activeChallengeResponse
    return () => {
      return activeChallengeResponse(response, challengeID)
    }
  }


  render() {
    return (
      <div>
        A player challenged you!!
        <button onClick={this.challengeResponseHandler(true)}>Accept</button>
        <button onClick={this.challengeResponseHandler(false)}>Reject</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.toJSON();
}

export default connect(mapStateToProps, actionCreators)(ActiveChallageInterface);
