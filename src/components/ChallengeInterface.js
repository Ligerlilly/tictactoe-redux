import React from 'react';

export default class ChallangeInterface extends React.Component {
  constructor(props) {
    super(props);
  }

  doCancel() {

  }

  componentDidMount() {

  }

  render() {
    let cancel = () => this.doCancel();

    return (
      <div>
        Waiting for the player to respond ...
        <button onClick={cancel}>Cancel</button>
      </div>
    );
  }
}
