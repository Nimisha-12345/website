import React from 'react';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Users from './pages/Users';
import Project from './pages/Project';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

         <Header/>
         <Switch>
         <Route exact path='/' component= {Home} />
         <Route path='/issues' component= {Issues} />
         <Route path='/users' component= {Users} />
         <Route path='/project' component= {Project} />
         </Switch>
         <Footer />

       </Router>
    </div>
  );
}

export default App;
