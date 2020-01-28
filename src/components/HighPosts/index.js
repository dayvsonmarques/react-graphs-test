import React, { Component } from "react";
import axios from "axios";
import Chart from "react-google-charts";

const colors = [
  "#220a37",
  "#2a0d45",
  "#330f53",
  "#663096",
  "#551a8b",
  "#9975b9"
];

class HighPosts extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      let comments = [];
      let commentsGroup = [];

      res.data.forEach(element => {
        if (typeof comments[element.postId] === "undefined") {
          comments[element.postId] = [];
        }

        comments[element.postId].push(element);
      });

      console.log(comments);

      commentsGroup.push(["ID", "Media", { role: "style" }]);

      comments.forEach(element => {
        if (typeof element[0].postId !== "undefined") {
          commentsGroup.push([
            element[0].postId,
            element.length,
            colors[Math.floor(Math.random() * colors.length)]
          ]);
        }
      });

      this.setState({ data: commentsGroup });
    });
  }

  render() {
    return (
      <div className="App">
        <h3>High Posts (most commented)</h3>

        <Chart
          chartType="ColumnChart"
          width="100%"
          height="500px"
          loader={<div>Loading Chart</div>}
          data={this.state.data}
          options={{
            title: "Photos most commented",
            chartArea: { width: "100%" },
            hAxis: {
              minValue: 0
            }
          }}
        />
      </div>
    );
  }
}

export default HighPosts;
