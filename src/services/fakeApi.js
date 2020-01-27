import React from 'react';

export const getAlbumPhotos = () => {
  fetch('http://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log);
}
