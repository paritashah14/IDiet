import React, { Component } from 'react';
import './Login.css'
import { Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleInputChange = (evt) => {
        evt.preventDefault();
        this.setState({email : evt.target.value});
        console.log(this.state.email)
    }

    change = (ev) => {
        this.setState({[ev.target.name]:ev.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("just submitted the data");
        console.log(this.props.clients)
        for (let elem of this.props.clients) {
            if (elem.email === this.state.email && elem.password === this.state.password){
                console.log("email and password matches");
                // redirect a new component
                break;
            }
            else{
                console.log('there are no matches')
            }
        }
    }

    componentDidUpdate() {
        console.log(this.state.email)
    }

    render() {
       const { email, password } = this.state;
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="useremail">Email</Label>
                                <Input type="email" name="email" id="useremail" placeholder="Enter your Email"
                                    onChange={(evt) => { this.change(evt) }}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="userpassword">Password</Label>
                                <Input type="password" name="password" id="userpassword" placeholder="Enter your Password"
                                    onChange={(evt) => { this.setState({ [evt.target.name]: evt.target.value }) }}
                                />
                            </FormGroup>
                        </Col> 
                    </Row>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Login;

