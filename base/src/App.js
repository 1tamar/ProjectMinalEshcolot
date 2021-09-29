
import './App.css';
import Login from "./containers/Login";
import Input from "./inputProps/input";
import { Provider } from 'react-redux';
import Empty from "./empty";
import Store from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./homePage/home"
//import hh from './\Pictures\IMG_0020.JPG';

//C:\Users\12345\Desktop\base\src\Pictures\IMG_0024.JPG
function App() {

  return (
    <div className="App">

       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
 
          {/* <img src={hh} alt="" width="30" height="24" />   */}
          מינהל קהילתי אשכולות
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link home" aria-current="page" href="/home">דף הבית</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='/Login'>התחברות</a>
              </li>
              <li class="nav-item">
                <a class="nav-link add" href='/Input' >הוספת פעילות</a>
              </li>
            </ul>
          </div>

        </div>
      </nav> 

      <Provider store={Store}>
        <Router>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path='/Empty'>
              <Empty />
            </Route>
              <Route path='/Input'>
              <Input />
            </Route>  
             <Route path='/home'>
              <Home />
            </Route> 
            <Route path="/" >
              <Login />
            </Route>
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}
export default App;
