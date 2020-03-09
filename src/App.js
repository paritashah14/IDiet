import React, { Component } from 'react';
import './App.css';

import { Button, Form ,FormGroup, Label, Input }
from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {
    return(
    <Form className="login-form">
     <h1>
     <span className="font-weight-bold">IDiet</span>
     </h1>
     
     <FormGroup>
     <Label>Email</Label><br/>
     <Input type ="Email" placeholder="Email"/>
     </FormGroup>

     <FormGroup>
     <Label>Password</Label><br/>
     <Input type ="Password" placeholder="Password"/>
     </FormGroup>

     <Button className="btn-lg btn-dark btn-block">
     Login
     </Button>

     <div className = "text-center pt-3">
      Or Continue with your social account
      </div>
      <FacebookLoginButton className="nt-3 mb-3"/>
      <div className="text-center">
      <a href="/sign-up">Sign-Up</a>
      <span className="p-2">|</span>
      <a href ="/Forgot Password">Forgot Password</a>
      </div>
    </Form>

    
    

  );
}

}
export default App;
