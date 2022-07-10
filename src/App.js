import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from './Pages/Home/Home';
import RegisterPage from './Pages/Forms/Register/RegisterPage'
import LoginPage from './Pages/Forms/Login/LoginPage';
import Posts from './Pages/Posts/Posts';


const App = () => {
  return ( 
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
   );
}
 
export default App;
