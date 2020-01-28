import React, { Component } from 'react';
import axios from 'axios';
import Chart from "react-google-charts";

/* const colors = [
  '#220a37', '#2a0d45', '#330f53', '#663096', '#551a8b', '#9975b9'
]; */
class AlbumsPhotos extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const photos = res.data;
        let albumsPhotos = [];
        let totalPhotos = res.data.length;
        console.log(totalPhotos);

        photos.forEach(element => {
          if(typeof albumsPhotos[element.albumId] === 'undefined'){
            albumsPhotos[element.albumId] = [];
          }

          albumsPhotos[element.albumId].push(element);
        });

        let photosOrdened = [];
        photosOrdened.push(["Photos by Album", "%"]);

        albumsPhotos.forEach(element => {
          photosOrdened.push(
            ['Album ' + element[0].albumId + ' (' + element.length + ' photos)', 
            ((element.length * 100) / totalPhotos)]
          ); 
        });

        this.setState({ data : photosOrdened });
      });
  }

  render() {
    return (
      <div className="App">
        <h3>Albums Photos</h3>
        <p>% photos distribuited by albums</p>

        <Chart
          chartType="PieChart"
          width="100%"
          height="700px"
          loader={<div>Loading Chart</div>}
          data={this.state.data}
          options={{
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

export default AlbumsPhotos;
