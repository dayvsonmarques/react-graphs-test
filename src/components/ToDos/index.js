import React, { Component } from "react";
import axios from "axios";
import Chart from "react-google-charts";

/* const colors = [
  "#220a37",
  "#2a0d45",
  "#330f53",
  "#663096",
  "#551a8b",
  "#9975b9"
]; */
class ToDos extends Component {
  state = {
    toDos: []
  };

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/todos").then(response => {
      console.log(response.data);
      let data = response.data;

      let completedAll = [];
      let incompleteAll = [];
      let toDos = [];

      data.forEach(element => {
        if (element.completed) {
          completedAll.push(element);
        } else {
          incompleteAll.push(element);
        }
      });

      toDos.push(["Status", "%"]);
      toDos.push(["Completed \n (" + completedAll.length + " activities)", (completedAll.length * 100) / data.length]);
      toDos.push(["Incomplete \n (" + incompleteAll.length + " activities)",
      (incompleteAll.length * 100) / data.length]);

      this.setState({
        toDos: toDos 
      });
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="row">
            <div className="col-12">
              <h3>To Dos</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Chart
                width={"500px"}
                height={"350px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={this.state.toDos}
                rootProps={{ "data-testid": "1" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDos;
