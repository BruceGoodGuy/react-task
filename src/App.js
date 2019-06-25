import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Badge from './components/badge/index';
import SearchSort from './components/search/index';
import Table from './components/table/index';

class App extends Component {

  constructor (props){
    super(props);
    this.state = ({
      tasks: []
    })
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      this.setState({tasks: JSON.parse(localStorage.getItem('tasks'))})
    }
  }

  render(){
    return (
      <div>
        <Header></Header>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-4">
              <Badge></Badge>
            </div>
            <div className="col-md-8">
              <SearchSort></SearchSort>
            </div>
          </div>
          <div className="row mt-2">
            <Table data={this.state.tasks}></Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
