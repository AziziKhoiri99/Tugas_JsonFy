import React from 'react';
import axios from 'axios';

class Albums extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonfy.com/albums')
    .then(res => {
    console.log(res);
    this.setState({
      albums: res.data, 
    });
  });
  }

  render() {
    const { albums = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="/Albums" class="brand-logo">Albums</a>
          <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab"><a href="/Posts">Posts</a></li>
            <li class="tab"><a href="/Comments">Comments</a></li>
            <li class="tab"><a href="/Users">Users</a></li>
            <li class="tab"><a href="/Albums">Albums</a></li>
            <li class="tab"><a href="/Photos">Photos</a></li>
            <li class="tab"><a href="/Categories">Categories</a></li>
            <li class="tab"><a href="/Items">Items</a></li>
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
                <th align="right">Title</th>
                <th align="right">Use Alb Fk</th>
            </tr>
            </thead>
            <tbody>
            {albums.map(todo => 
                <tr key={todo.id}>
                <td>{todo.id}</td>
                <td align="right">{todo.title}</td>
                <td align="right">{todo.use_alb_fk}</td>
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

export default Albums;