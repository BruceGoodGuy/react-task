import React, {Component} from 'react';

class SearchSort extends Component {
  render(){
    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <label className="sr-only">Username</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" />
                        <div className="input-group-prepend">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </form>
    );
  }
}

export default SearchSort;
