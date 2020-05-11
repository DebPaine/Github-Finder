import React, { Component } from 'react';
import UserItem from './UserItem';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [1, 2, 3, 4],
    };
  }
  render() {
    const { users } = this.state;

    return (
      <div className='container' style={userStyle}>
        {users.map((user, index) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '1rem',
};
