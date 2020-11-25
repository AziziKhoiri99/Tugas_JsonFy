import React from 'react';
import axios from 'axios';

class Posts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonfy.com/posts')
    .then(res => {
    console.log(res);
    this.setState({
      posts: res.data, 
    });
  });
  }

  render() {
    const { posts = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Posts</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/Posts">Home</a></li>
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
        <li><a href="/Posts">Home</a></li> 
      </ul>
        <header className="App-header">
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th align="right">Use Pos Fk</th>
                <th align="right">Title</th>
                <th align="right">Excerpt</th>
                <th align="right">Body</th>
                <th align="right">Date Add</th>
                <th align="right">Date Upd</th>
            </tr>
            </thead>
            <tbody>
            {posts.map(todo => 
                <tr key={todo.id}>
                <td>{todo.id}</td>
                <td align="right">{todo.use_pos_fk}</td>
                <td align="right">{todo.title}</td>
                <td align="right">{todo.excerpt}</td>
                <td align="right">{todo.body}</td>
                <td align="right">{todo.date_add}</td>
                <td align="right">{todo.date_upd}</td>
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

export default Posts;