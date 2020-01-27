import React, { Component } from 'react';
import axios from 'axios';

class ToDos extends Component {
  /* state = { 
    
  }  */

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response.data);
        let data = response.data;

        let completed = [];
        let incomplete = [];
        let toDos = [];

        data.forEach(element => {
          if(element.completed){
            completed.push(element);
          }else{
            incomplete.push(element);
          }
        });

        toDos = {
          'completed': {
            'data': completed,
            'percent': (completed.length * 100) / data.length,
            'total': completed.length
          },
          'incomplete': {
            'data': incomplete,
            'percent': (incomplete.length * 100) / data.length,
            'total': incomplete.length
          }
        };
        
        console.log(toDos);

       /*  this.setState({
          toDos: toDos
        }); */
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
            { this.state.toDos.map(toDo => <li>{toDo.completed}</li>)}
          </div>
        </div>
      </div>
      </div>

        
    );
  }

}

export default ToDos;
