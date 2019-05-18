import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './components/classics/Home'
import './App.css'

import Profil from './components/classics/Profil'
import RequireAuth from './components/containers/RequireAuth'

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profil/" component={RequireAuth(Profil)} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
