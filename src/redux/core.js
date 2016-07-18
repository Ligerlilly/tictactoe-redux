import Immutable from 'immutable';

const AppState = Immutable.fromJS({
  game: {},
  players: [],
  visible: '',
  username: '',
  challengedPlayer: '',
  activeChallenge: '',
  challengeStatus: '',
  challengeID: '',
})

export function setChallengeStatus(state, status) {
  state = state.set('visible', 'gameboard')
  state = state.set('challengeStatus', status)
  return state
}

export const INITIAL_STATE = AppState;

export function postJoinPlayer(state, playerName) {
    state = state.set('username', playerName);
    return state.set('visible', 'roster');
}

export function postLoadPlayers(state, players) {
  return state.set('players', players);
}

export function postChallengePlayer(state, match) {
  state = state.set('visible', 'challenge');
  state = state.set('challengedPlayer', match.challengedPlayer);
  state = state.set('activeChallenge', match.challengerPlayer);
  return state;
}

export function setChallenge(state, challenge) {
  state = state.set('challengeID', challenge.challengeID);
  state = state.set('visible', 'challenge');
  state = state.set('challengedPlayer', challenge.challengedPlayer);
  state = state.set('activeChallenge', challenge.challengerPlayer);
  return state;
}

export function setActiveChallengeResponse(state, res) {
  state = state.set('activeChallenge', undefined)
  state = state.set('challengeID', undefined)


  if ( res.challengeStatus == 'accepted' ) {
    state = state.set('visible', 'gameboard')
  }

  if ( res.challengeStatus == 'rejected' ) {
    state = state.set('visible', 'roster')
  }
  
  return state;
}
