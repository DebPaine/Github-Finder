import React, { Component } from 'react';

export default class UserItem extends Component {
  render() {
    const { id, login, avatar, url } = this.props.user;

    return (
      <div className='card text-center'>
        <h2>{this.props.user}</h2>
      </div>
    );
  }
}
