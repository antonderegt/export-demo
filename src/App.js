// export-demo/src/App.js
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div style={style}>
        <div>
          <h1>Export Demo</h1>
          <button>Export to Excel</button>
          <table>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Elon</td>
              <td>Musk</td>
              <td>23</td>
            </tr>
            <tr>
              <td>Donald</td>
              <td>Trump</td>
              <td>94</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
var style = {
  display: 'flex',
  justifyContent: 'center',
}
export default App;