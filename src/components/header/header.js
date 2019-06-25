import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
      <div className="container-fluid p-0">
        <ul className="nav justify-content-center bg-primary">
            <li className="nav-item">
                <h3 className="nav-link active text-white">HOME</h3>
            </li>
        </ul>
      </div>
    );
  }
}

export default Header;
