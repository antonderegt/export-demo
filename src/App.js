import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: [
        {
          firstname: "Elon", 
          lastname: "Musk", 
          age: 23
        }, 
        {
          firstname: "Donald", 
          lastname: "Trump", 
          age: 94
        }
      ]
    }
  }

  render() {
    const userColumns = [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            id: "firstname",   
            accessor: d => d.firstname
          },
          {
            Header: "Last Name",
            id: "lastname",  
            accessor: d => d.lastname
          }
        ]
      },
      {
        Header: "Age",
        columns: [
          {
            Header: "Age",
            id: "age",  
            accessor: d => d.age
          }
        ]
      }
    ]
    return (
      <div style={style}>
        <div>
          <h1>Export Demo</h1>
          <button>Export to Excel</button>
          <ReactTable
            style={{marginLeft:'-40%', marginRight:'-40%'}}
            data={this.state.users}
            columns={userColumns}
          />
        </div>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
}

export default App;
