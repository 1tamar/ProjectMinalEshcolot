import React, { useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signup.css";
import im1 from '../Pictures/רקע.jpg';



function mapStateToProps(state) {
    return { ...state };
}


export default withRouter(connect(mapStateToProps)(function Signup(props) {
    const { history } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    function trySignup() {
        if (password = ConfirmPassword)
            history.push('./homeSecritery');
        else
            alert("שם מתמש או סיסמא שגויים, נסה שנית.");
    }


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <div class="Signup-body">

                <div class="form_signup">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>שם משתמש</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>סיסמא</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>אשר סיסמא</Form.Label>
                            <Form.Control
                                type="password"
                                value={ConfirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="button" disabled={!validateForm()} onClick={trySignup}>
                            הרשם
                        </Button>
                    </Form>
                </div>
                 {/* <div class="background_login"> 
                    <img  src={im1} />
                </div> */}
             </div> 
        </>
    );
}))
