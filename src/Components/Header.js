import React, { Component } from 'react';
import {cryptoEmail} from '../Pages/Login';

  class Header extends Component {
    render() {
      return (
        <img src={`https://www.gravatar.com/avatar/${cryptoEmail}`} alt="" />
    )
    }
  }

export default Header;
