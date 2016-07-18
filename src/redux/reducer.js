import {
  INITIAL_STATE,
  postJoinPlayer,
  postLoadPlayers,
  postChallengePlayer,
  setChallengeStatus,
  setChallenge,
  setActiveChallengeResponse,
} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHALLENGE_RESPONSE':
      return setActiveChallengeResponse(state, action.response)
    case 'CHALLENGE_STATUS':
      return setChallengeStatus(state, action.status)
    case 'SET_CHALLENGE':
      return setChallenge(state, action.challenge)
    case 'CHALLENGE_PLAYER':
      return postChallengePlayer(state, action.match)
    case 'LOAD_PLAYERS':
      return postLoadPlayers(state, action.players);
    case 'JOIN_PLAYERS':
      return postJoinPlayer(state, action.playerName);
    default:
      return state;
  }
}
