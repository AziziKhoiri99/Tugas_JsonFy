import React from 'react';
import axios from 'axios';

class Photos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonfy.com/photos')
    .then(res => {
    console.log(res);
    this.setState({
      photos: res.data, 
    });
  });
  }

  render() {
    const { photos = [] } = this.state;
    return (
      <div className="App">
        <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="/Photos" class="brand-logo">Photos</a>
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
                <th align="right">Alb Pho Fk</th>                
                <th align="right">Caption</th>
                <th align="right">Url</th>
                <th align="right">Thumbnail Url</th>
            </tr>
            </thead>
            <tbody>
            {photos.map(todo => 
                <tr key={todo.id}>
                <td>{todo.id}</td>
                <td align="right">{todo.alb_pho_fk}</td>
                <td align="right">{todo.caption}</td>
                <td align="right">{todo.url}</td>
                <td align="right">{todo.thumbnail_url}</td>
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

export default Photos;