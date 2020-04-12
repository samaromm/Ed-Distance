import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import Home from './Components/Home.js'
import Teachlogin from './Components/TeachLogin';
import Stulogin from './Components/StuLogin'

function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Route path='/' exact component={Home}/>
        <Route path='/teachlogin' exact component={Teachlogin}/>
        <Route path='/stulogin' exact component={Stulogin}/>
      </HashRouter>
    </div>
  );
}

export default App;
