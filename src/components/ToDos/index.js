import React, { Component } from 'react';
import axios from 'axios';

class ToDos extends Component {
  state = { 
    incomplete: [],
    complete: []
  } 

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response.data);
        let data = response.data;

        let completedAll = [];
        let incompleteAll = [];
        let toDos = [];

        data.forEach(element => {
          if(element.completed){
            completedAll.push(element);
          }else{
            incompleteAll.push(element);
          }
        });

        completedAll = [
          completedAll,
          (completedAll.length * 100) / data.length,
          completedAll.length
        ];
        
        incompleteAll = [
          incompleteAll,
          (incompleteAll.length * 100) / data.length,
          incompleteAll.length
        ];

        console.log(toDos);

        this.setState({
          toDos: toDos
        });
      });
  }

  render() {
    return(
      <div>
        <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>To Dos</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            { this.state.toDos }
          </div>
        </div>
      </div>
      </div>
    );
  }

}

export default ToDos;
