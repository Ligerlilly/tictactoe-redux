import * as client from '../client';

export function activeChallengeResponse(accepted, challengeID) {
  return dispatch =>
    client.activeChallengeResponse(accepted, challengeID)
    .then(res => dispatch(receiveChallengeResponse(res)))
}

export function joinPlayer(username) {
  return dispatch =>
    client.joinPlayer(username)
    .then(function() {
      console.log('posted username');
      return dispatch(receivePlayerName(username))
    });
}

export function getChallengeStatus(challengeID) {
  return dispatch => client.getChallengeStatus(challengeID).then(
    (res) => {
      if ( res.challengeStatus === 'accepted' ) {
        dispatch(receiveChallengeStatus('accepted'))
      }
      if ( res.challengeStatus === 'rejected' || res.challengeExpired ) {
        dispatch(receiveChallengeStatus('rejected'))
      }
    }
  )
}

export function challengePlayer(challengedPlayer, thisPlayer) {
  return dispatch => client.challengePlayer(challengedPlayer, thisPlayer)
  .then((res) => {
    return dispatch(receiveChallengedPlayer(res));
  });
}

export function loadPlayerList() {
  return dispatch => client.loadPlayers()
  .then((response) => {
    console.log('Loading');
    return dispatch(receiveLoadPlayers(response));
  });
}

export function activeChallenge(playerName) {
  return dispatch => client.isChallenged(playerName)
  .then((res) => {
      dispatch(receiveChallenge(res))
  });
}
export function receiveChallenge(challenge) {
  console.log(challenge)
  if (challenge.challengeID) {
    return {
        type: 'SET_CHALLENGE',
        challenge: challenge,
    }
  }
}
export function receiveChallengedPlayer(match) {
  return {
    type: 'CHALLENGE_PLAYER',
    match: match,
  }
}

export function receiveLoadPlayers(players) {
  return {
    type: 'LOAD_PLAYERS',
    players: players
  }
}
export function receivePlayerName(username) {
  return {
    type: 'JOIN_PLAYERS',
    playerName: username
  };
}

export function receiveChallengeStatus(status) {
  return {
    type: 'CHALLENGE_STATUS',
    status: status,
  }
}

export function receiveChallengeResponse(res) {
  return {
    type: 'CHALLENGE_RESPONSE',
    response: res,
  }
}
