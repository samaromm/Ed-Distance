import React from 'react';
import './App.css';
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";

class App extends React.Component {
  render(){
    return (
      <div>
        <UserProvider>
          <Application />
        </UserProvider>
      </div>
    );
  }
  
}

export default App;
