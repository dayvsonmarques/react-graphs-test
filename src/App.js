import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import AlbumsPhotos from './components/AlbumsPhotos';
import UsersAlbums from './components/UsersAlbums';
import ToDos from './components/ToDos';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" component={AlbumsPhotos} exact></Route>
            <Route path="/users-album" component={UsersAlbums}></Route>
            <Route path="/to-dos" component={ToDos}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
