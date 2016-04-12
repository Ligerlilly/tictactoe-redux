import { Record } from 'immutable';

export const appStateRecord = Record({
  hasChallenge: false,
  game: {},
  players: {},
})

export const INITIAL_STATE = new appStateRecord();
