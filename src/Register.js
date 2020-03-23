import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            Gender: '',
            date: ''
        }
    }

    change = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    componentDidUpdate() {
        //console.log(this.state)
    }

    render() {
        return (
            <div className="Register">
                <Form onSubmit={this.handleSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="firstname" >First Name</Label>
                                <Input type="text" name="firstname" id="firstname" placeholder="Enter your First Name"
                                    onChange={(evt) => { this.change(evt) }}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="lastname">Last Name</Label>
                                <Input type="text" name="lastname" id="lastname" placeholder="Enter your Last Name"
                                    onChange={(evt) => { this.change(evt) }}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

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

                    <FormGroup tag="fieldset">
                        <legend>Gender</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" value="Male"
                                    onChange={(evt) => { this.change(evt) }} />{' '}
                                Male
                                </Label>
                        </FormGroup>


                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" value="Female"
                                    onChange={(evt) => { this.change(evt) }} />{' '}
                                Female
                            </Label>
                        </FormGroup>

                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" value="Other"
                                    onChange={(evt) => { this.change(evt) }} />{' '}
                                Other
                            </Label>
                        </FormGroup>

                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleDate">Date of Birth</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="exampleDate"
                                    placeholder="date placeholder"
                                    onChange={(evt) => { this.change(evt) }}
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

export default Register;