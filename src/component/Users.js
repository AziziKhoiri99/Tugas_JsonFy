import React from 'react';
import axios from 'axios';

class Users extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    } 
  }

  componentDidMount() {
    axios.get('https://jsonfy.com/users')
    .then(res => {
    console.log(res);
    this.setState({
      users: res.data, 
    });
  });
  }

  render() {
    const { users = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Users</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab"><a href="/Posts">Posts</a></li>
            <li class="tab"><a href="/Comments">Comments</a></li>
            <li class="tab"><a href="/Users">Users</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li> 
      </ul>
        <header className="App-header">
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th align="right">Name</th>
                <th align="right">Username</th>
                <th align="right">Email</th>
                <th align="right">Password</th>
                <th align="right">Age</th>
                <th align="right">Website</th>
                <th align="right">Phone</th>
                <th align="right">Data Add</th>
                <th align="right">Data Upd</th>
                <th align="right">Password Md5</th>
            </tr>
            </thead>
            <tbody>
            {users.map(todo => 
                <tr key={todo.id}>
                <td>{todo.id}</td>
                <td align="right">{todo.name}</td>
                <td align="right">{todo.username}</td>
                <td align="right">{todo.email}</td>
                <td align="right">{todo.password}</td>
                <td align="right">{todo.age}</td>
                <td align="right">{todo.website}</td>
                <td align="right">{todo.phone}</td>
                <td align="right">{todo.data_add}</td>
                <td align="right">{todo.data_upd}</td>
                <td align="right">{todo.password_md5}</td>
                </tr>
            )}
            </tbody>
        </table>
          <br/><br/><br/>
        </header>
      </div>
    );
  }
}

export default Users;