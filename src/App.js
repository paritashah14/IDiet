import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Content from './Content';
import logo from './iDiet.svg';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isdisplay: true,
      clients: [],
      loggedin: false,
    }
  }

  componentDidMount(){
    axios.get('data.json')
    .then((resp) => {
      this.setState({clients:resp.data});
      console.log(this.state.clients)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  

  render() {
    /* const formToDisplay = ((this.state.isdisplay) ? <Login /> : <Register />) */
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' 
              render={(props) => <Login {...props} clients={this.state.clients} />}
            exact />
            <Route path='/register' component={Register} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <Route path='/content' component={Content} />
          </Switch>
        </div>
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/register" >Register</Link></li>
            <li><Link to="/forgotpassword" >Forgot Password</Link></li>

          </ul>
        </nav>
      </Router>
    );
  }
}

export default App;
