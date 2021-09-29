 import React, { useState } from "react";
 import { connect } from 'react-redux';
 import { withRouter} from 'react-router-dom';
 import Form from "react-bootstrap/Form";
 import Button from "react-bootstrap/Button";
 import "./Login.css";

// import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router';
// import { setUserName, setPassword, setUser } from "../Actions";
// import { MethodType, UserContoroller, Call } from "../ApiCallingService";




 function mapStateToProps(state){
     return {login:{...state.login}};
 }

// export default withRouter(connect(mapStateToProps)(function Login(props) {


//   const { User, dispatch, history } = props;
//   return <div>
//       <div>UserName:<input value={User.UserName} onChange={(e) => dispatch(setUserName(e.target.value))} /></div>
//       <div>Password:<input value={User.Password} onChange={(e) => dispatch(setPassword(e.target.value))} /></div>
//       <div><input type="button" value="הכנס" onClick={login} /></div>
//   </div>
// }));






export default withRouter(connect(mapStateToProps)( function Login(props) {
    const{login,history}=props;
  //  const login = () => {
      
  //          debugger;
  //         //Login
  //          Call(UserContoroller, "Login", MethodType.POST, User,
  //          (res) => {
  //              if (res.Status) {
  //                  dispatch(setUser(res.Data));
  //                  history.push('/Home');
  //              }
  //              else
  //                  alert(res.Message);
  //          },
  //          (err) => {
  //              alert("שגיאה")
  //          });
  //          //Add user
  //          Call(UserContoroller, "", MethodType.POST, User,
  //          (res) => {
  //              if (res.Status) {
  //                  dispatch(setUser(res.Data));
  //                  history.push('/Home');
  //              }
  //              else
  //                  alert(res.Message);
  //          },
  //          (err) => {
  //              alert("שגיאה")
  //          })
  //          //Get user by id
  //          Call(UserContoroller, "", MethodType.GET, [User.Id],
  //           (res) => {
  //               if (res.Status) {
  //                   dispatch(setUser(res.Data));
  //                   history.push('/Home');
  //               }
  //               else
  //                   alert(res.Message);
  //           },
  //           (err) => {
  //               alert("שגיאה")
  //          })
  //          //Get all users
  //          Call(UserContoroller, "", MethodType.GET, [],
  //            (res) => {
  //              debugger;
  //                if (res.Status) {
  //                    dispatch(setUser(res.Data));
  //                    history.push('/Home');
  //                }
  //                else
  //                    alert(res.Message);
  //            },
  //            (err) => {
  //                alert("שגיאה")
  //          })
  //          //Update user details
  //          Call(UserContoroller, "", MethodType.PUT, User,
  //            (res) => {
  //                if (res.Status) {
  //                    dispatch(setUser(res.Data));
  //                    alert(res.Message);
  //                }
  //                else
  //                    alert(res.Message);
  //            },
  //            (err) => {
  //                alert("שגיאה")
  //          })
  //         //Delete user
  //          all(UserContoroller, "", MethodType.DELETE, [User.Id],
  //            (res) => {
  //                if (res.Status) {
  //                  alert(res.Message);
  //                }
  //                else
  //                    alert(res.Message);
  //            },
  //            (err) => {
  //                alert("שגיאה")
  //          })
  //  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function tryLogin(){
    if(email==login.email&&password==login.password)
    history.push('./empty');
}
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
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
        <Button block size="lg" type="button" disabled={!validateForm()} onClick={tryLogin()}>
          הכנס
        </Button>
      </Form>
    </div>
  );
}))
