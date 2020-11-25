import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Users from './component/Users';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Home}/>
        <Route path="/Posts" component={Posts}/>
        <Route path="/Comments" component={Comments}/>
        <Route path="/Users" component={Users}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
