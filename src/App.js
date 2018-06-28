import React from 'react';

import './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container } from './styles/components';

const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
