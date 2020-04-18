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
import firebase from './base'


function App () {

  React.useEffect(()=>{
      firebase.firestore().collection("university").onSnapshot(snapshots=>{
        const allDocs ={}
        snapshots.docs.map(doc=>{
          return allDocs[doc.id]={...doc.data()}
        })
        console.log(allDocs)
      })
  },[])

    return (
      <AuthProvider>
        <Router basename='/'>
          <div>
            <Route path='/' exact component={Home}/>
            <Route path='/teachlogin' exact component={Teachlogin}/>
            <Route path='/stulogin' exact component={Stulogin}/>
            <PrivateRoute path='/student' exact component={StuProfile}/>
            <PrivateRoute path='/teacher' exact component={TeachProfile}/>
          </div>
        </Router>
      </AuthProvider>
    );
}

export default App;
