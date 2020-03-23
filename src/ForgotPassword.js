import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './ForgotPassword.css'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
        }
    }

    render() {
        return (
            <div className="ForgotPassword">
                <Form onSubmit={this.handleSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="userpassword">Password</Label>
                                <Input type="password" name="password" id="userpassword" placeholder="Enter your password"
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

export default ForgotPassword;