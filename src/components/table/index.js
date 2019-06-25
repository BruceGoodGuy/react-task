import React, {Component} from 'react';

class Table extends Component {
  render(){
      let {data} = this.props;
      let elements = data.map((value, key) => {
          return ( <tr key={value.id}>
            <th scope="row">{++key}</th>
            <td>{value.name}</td>
            <td>
                {value.status?<span className="badge badge-pill badge-success">Active</span>:<span className="badge badge-pill badge-danger">Inactive</span>}
            </td>
            <td>
                <button type="button" className="btn btn-warning mr-2">
                Edit <span className="badge badge-light">Task</span>
                </button>
                <button type="button" className="btn btn-danger">
                Delete <span className="badge badge-light">Task</span>
                </button>
            </td>
        </tr> );
      })
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody> 
                {elements}
            </tbody>
        </table>
    );
  }
}

export default Table;
