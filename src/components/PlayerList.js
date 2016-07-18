import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action-creators';
import Player from './Player.js';

export default class PlayerList extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     Emitter.on("player-list-changed", function(players) {
    //         this.setState({ players: players });
    //     }.bind(this) );
    // }
    //
    componentDidMount() {
        console.log("Started roster updater.");
        var context = this;
        let loadPlayerList = this.props.loadPlayerList;
        this.daemon = setInterval( function() {
          loadPlayerList();
        }, 1000 );
        //
        // Dispatcher.dispatch({ type: "load-player-list" });

        // console.log("Started active challenge checker.");
        // this.activeChallengeDaemon = setInterval( function() {
        //     Dispatcher.dispatch({ type: "active-challenge" });
        // }, 1000 );
    }
    //
    // componentWillUnmount() {
    //     console.log('Stopped roster updater.');
    //     clearInterval(this.daemon);
    //
    //     console.log('Stopped active challenge checker.');
    //     clearInterval(this.activeChallengeDaemon);
    // }

    render() {
        const thisPlayer = this.props.username;
        const players = this.props.players ? this.props.players.map(function(player) {
            let canChallenge = thisPlayer !== player.playerName
            return (
                <Player playerName={player.playerName} canChallenge={canChallenge} />
            );
        }) : null

        return (
            <ul>
              {players}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return state.toJSON();
}

export default connect(mapStateToProps, actionCreators)(PlayerList);
