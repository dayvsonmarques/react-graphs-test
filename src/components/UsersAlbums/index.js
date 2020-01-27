import React, { Component } from 'react';
import axios from 'axios';
import Chart from "react-google-charts";

const colors = [
  '#220a37', '#2a0d45', '#330f53', '#663096', '#551a8b', '#9975b9'
];

class UsersAlbums extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => {
      const photos = res.data;
      let albumsPhotos = [];

      photos.forEach(element => {
        if(typeof albumsPhotos[element.albumId] === 'undefined'){
          albumsPhotos[element.albumId] = [];
        }

        albumsPhotos[element.albumId].push(element);
      }); 

      let photosOrdened = [];
      photosOrdened.push(["ID", "Media", { role: "style" }]);

      albumsPhotos.forEach(element => {
        photosOrdened.push(
          [
            element[0].albumId,
            element.length,
            colors[Math.floor(Math.random() * colors.length)]
          ]
        ); 
      });

      this.setState({ data : photosOrdened });
    });
  }

  render() {
    return(
      <div className="App">
        <p>Most Photos By Users</p>

        <Chart
          chartType="ColumnChart"
          width="100%"
          height="700px"
          loader={<div>Loading Chart</div>}
          data={this.state.data}
          options={{
            title: 'Total photos by users',
            chartArea: { width: '100%' },
            hAxis: {
              title: 'photos by album',
              minValue: 0,
            },
            vAxis: {
              title: 'Photos',
            },
          }}
        />
      </div>
    );
  }
}

export default UsersAlbums;
