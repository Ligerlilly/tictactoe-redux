import React from 'react';
import reducer from '../redux/reducer';
import Main from './Main';
import Cookie from 'react-cookie';

export default class JoinInterface extends React.Component {
  constructor(props) {
    super(props);
  }

  doSubmit() {
    let username = this.refs.username.value;
    if (username) {
      Cookie.save('username', username);
      this.props.joinPlayer(username);
    }
  }
  componentDidMount() {
      this.refs.username.focus();
  }

  componentDidUpdate() {
    this.refs.username.focus();
  }

  render() {
    return (
      <div>
        <span>Username</span>
        <br/>
        <input type='text' ref='username' defaultValue={Cookie.load('username')}/>
        <br/>
        <button onClick={this.doSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}
