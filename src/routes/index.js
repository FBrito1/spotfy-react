import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import Playlist from '../pages/playlist';

const Routes = () => (
  <Switch>
    <Route path="/" component={Browse} exact />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
