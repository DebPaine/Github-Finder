import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    const { title, icon } = this.props;
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='!#'>About</Link>
        </div>
      </nav>
    );
  }
}
