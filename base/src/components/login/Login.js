 import React, { useState } from "react";
 import { connect } from 'react-redux';
 import { withRouter} from 'react-router-dom';
 import Form from "react-bootstrap/Form";
 import Button from "react-bootstrap/Button";
 import "./Login.css";
 import im1 from '../Pictures/רקע.jpg';



 function mapStateToProps(state){
     return {login:{...state.login}};
 }




export default withRouter(connect(mapStateToProps)( function Login(props) {
    const{login,history}=props;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function tryLogin(){
    if(email==login.email&&password==login.password)
    history.push('./homeSecritery');
  else
  alert("שם מתמש או סיסמא שגויים, נסה שנית.")
}
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
function goToSignup(){
  history.push('./signup')
}
  return (
    <div className="background-login">
     
    <div className="Login">
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
        <Button block size="lg" type="button" disabled={!validateForm()} onClick={tryLogin}>
          הכנס
        </Button>
        <Button block size="lg" type="button" onClick={goToSignup}>
          צור חשבון
        </Button>
      </Form>
    </div>
    </div>
  );
}))
