import React from 'react';
import { Container, Search, User } from './styles.js';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/31147881?v=4" alt="Avatar" />
      Fabio Brito
    </User>
  </Container>
);

export default Header;
