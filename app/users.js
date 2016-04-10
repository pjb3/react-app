import React, {Component} from 'react'
import users from './users.json'

export default class Users extends Component{
  render() {
    var userRows = users.map((u) => {
      return (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.name}</td>
          <td>{u.email}</td>
        </tr>
      )
    })

    return (
      <div className="container">
        <main role="main">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {userRows}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}
