import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Users from './component/Users';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Categories from './component/Categories';
import Brands from './component/Brands';
import Items from './component/Items';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Home}/>
        <Route path="/Posts" component={Posts}/>
        <Route path="/Comments" component={Comments}/>
        <Route path="/Users" component={Users}/>
        <Route path="/Albums" component={Albums}/>
        <Route path="/Photos" component={Photos}/>
        <Route path="/Categories" component={Categories}/>
        <Route path="/Brands" component={Brands}/>
        <Route path="/Items" component={Items}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
