import React, { Component } from 'react';

export default class UserItem extends Component {
  render() {
    const { id, login, avatar, url } = this.props.user;

    return (
      <div className='card text-center'>
        <h2>{this.props.user}</h2>
        <h2>{login}</h2>
        <h2>{avatar}</h2>
        <h2>{url}</h2>
      </div>
    );
  }
}
