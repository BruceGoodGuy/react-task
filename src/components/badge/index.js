import React, {Component} from 'react';
import "./index.css";
var randomstring = require("randomstring");

class Badge extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
    this.createData = this.createData.bind(this);

  }

  createData = () => {
    var tasks = [
      {id: randomstring.generate({length: 15}), name: 'Learn English', status: true},
      {id: randomstring.generate({length: 15}), name: 'Play game', status: true},
      {id: randomstring.generate({length: 15}), name: 'Sleep', status: false}
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  render(){
    return (
      <div className='row'>
        <h3 className="mr-2"><span className="badge badge-primary">ADD TASK</span></h3>
        <h3><span className="badge badge-danger" onClick={this.createData}>CREATE DATA</span></h3>
      </div>
        
    );
  }
}

export default Badge;
