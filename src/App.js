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
import Messages from './Components/Messages'
import Contact from './Components/Contact'
import Favorites from './Components/favorites'
import Room from './Components/room'
import Online from './Components/classes'
import ClassVideo from './Components/videoClass'
import TeacherOnline from './Components/teachers/class'
import Se302T from './Components/se302t'
import Footer from './Components/footer'

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
            <Route path='/teacher/courses/se302' exact component={Se302T}/>
            <Route path='/student/messages' exact component={Messages}/>
            <Route path='/student/messages/new' exact component={Contact}/>
            <Route path='/student/favorites' exact component={Favorites}/>
            <Route path='/student/onlineclasses' exact component={Online}/>
            <Route path='/student/discussion' exact component={Room}/>
            <Route path='/teacher/messages' exact component={Messages}/>
            <Route path='/teacher/messages/new' exact component={Contact}/>
            <Route path='/teacher/favorites' exact component={Favorites}/>
            <Route path='/teacher/discussion' exact component={Room}/>
            <Route path='/student/class' exact component={ClassVideo}/>
            <Route path='/teacher/class' exact component={ClassVideo}/>
            <Route path='/teacher/onlineclasses' exact component={TeacherOnline}/>
          </div>
        </Router>
      </AuthProvider>
    );
}

export default App;
