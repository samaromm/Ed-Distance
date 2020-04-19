import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home.js'
import Teachlogin from './Components/TeachLogin';
import Stulogin from './Components/StuLogin';
import StuProfile from './Components/StuProfile';
import TeachProfile from './Components/TeachProfile';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Se302 from './Components/se302'


function App () {

    return (
      <AuthProvider>
        <Router basename='/'>
          <div>
            <Route path='/' exact component={Home}/>
            <Route path='/teachlogin' exact component={Teachlogin}/>
            <Route path='/stulogin' exact component={Stulogin}/>
            <PrivateRoute path='/student' exact component={StuProfile}/>
            <PrivateRoute path='/teacher' exact component={TeachProfile}/>
            <Route path='/student/courses/se302' exact component={Se302}/>
          </div>
        </Router>
      </AuthProvider>
    );
}

export default App;
