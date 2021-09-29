//   import React, { useState } from "react";
//   import { connect } from 'react-redux';
//   import { withRouter } from 'react-router-dom';
//   import Form from "react-bootstrap/Form";
//   import Button from "react-bootstrap/Button";
//   import "./input.css";
//   import { Dropdown, ListGroupItem } from "react-bootstrap";
// // //  function mapStateToProps(state){
// // //      return {login:{...state.login}};
// // //  }

// // //connect(mapStateToProps)(props

//   export default withRouter(function Input() {
// // //     //    const{login,history}=props;

// // //     //   const [email, setEmail] = useState("");
// // //     //   const [password, setPassword] = useState("");

// // //     // function tryLogin(){
// // //     //     if(email==login.email&&password==login.password)
// // //     //     history.push('./empty');
// // //     // }


// // //     //   function validateForm() {
// // //     //     return email.length > 0 && password.length > 0;
// // //     //   }
// // //     //   function handleSubmit(event) {
// // //     //     event.preventDefault();
// // //     //   }










//       return (
//           <div className="Login">
//               <div class="container1">
//                   <div class="room"> חדר</div>
//                         <div class="room">   סוג
//                           <select>
//                              <option>רגיל</option>
//                              <option>מחשבים</option>
//                              <option>ג'ימבורי</option>
//                              <option>בלט</option>
//                              <option>אולם</option>
//                             <option>התעמלות</option>
//                           </select>
//                         </div>
//               <div class="room"> תפוסה
//                   <input type="number"></input>
//               </div>
//               <div class="room"> קומה
//                    <select placeholder="קומה">
//                       <option>0</option>
//                       <option>1</option>
//                       <option>2</option>
//                       <option>3</option>
//                    </select>
//               </div>
//               </div>
  
//               <div>ציוד
//                   <table>
//                       <td>
//                           <th>asdfg</th>
//                           <th>asdfg</th>
//                           <th>asdfg</th>
//                       </td>
//                       <td>
//                           <tr>
//                               asdf
//                           </tr>
//                           <tr>
//                               asdf
//                           </tr> <tr>
//                               asdf
//                           </tr> <tr>
//                               asdf
//                           </tr>
//                       </td>
//                   </table>
//               </div>
//               <div>תאריך</div>
//           </div >
//       );
//   })//)