import React, { Component } from 'react';
import './App.css';
import AlbumsPhotos from './components/AlbumsPhotos';
import UsersAlbums from './components/UsersAlbums';

class App extends Component {
  render(){
    return (
      <div className="container">
        <AlbumsPhotos></AlbumsPhotos>
        <UsersAlbums></UsersAlbums>
      </div>
    );
  }
  
}

export default App;
