import 'whatwg-fetch';

export function joinPlayer(playerName) {
  return fetch('http://localhost:9090/lobby/roster?playerName=' + playerName, {
    method: "POST",
  });
}

export function loadPlayers() {
  return fetch('http://localhost:9090/lobby/roster').then((res) => res.json());
}
// $.post('http://localhost:9090/lobby/roster/' + challengedPlayer + '/challenge?challengerPlayerName=' + this.playerName, function(response) {

export function challengePlayer(challengedPlayer, playerName) {
  return fetch('http://localhost:9090/lobby/roster/' + challengedPlayer + '/challenge?challengerPlayerName=' + playerName, {
    method: "POST",
  }).then((res) => res.json());
}

// http://localhost:9090/lobby/challenge/' + self.challenge.challengeID

export function isChallenged(playerName) {
  return fetch('http://localhost:9090/lobby/roster/' + playerName + '/challenge').then(
    res => res.json()
  );
}
export function activeChallengeResponse(accepted, challengeID) {
  return fetch('http://localhost:9090/lobby/challenge/' + challengeID + '?response=' + (accepted ? 'accepted' : 'rejected'), {
    method: 'PUT',
  }).then(res => res.json())
}
// this._activeChallengeResponse = function(accepted) {
//       var self = this;
//       $.ajax({
//           url: 'http://localhost:9090/lobby/challenge/' + self.activeChallenge.challengeID + '?response=' + (accepted ? 'accepted' : 'rejected'),
//           type: 'PUT',
//           success: function(response) {
//               self.challenge = undefined;
//               self.activeChallenge = undefined;
//
//               if ( response.challengeStatus == 'accepted' ) {
//                   Game.reset(response.matchID);
//                   React.render(<Main visible='gameboard'/>, document.getElementById('main'));
//               }
//
//               if ( response.challengeStatus == 'rejected' ) {
//                   alert('rejected');
//                   React.render(<Main visible='roster'/>,ro document.getElementById('main'));
//               }
//
//           }.bind(self)
//       });
//   };
