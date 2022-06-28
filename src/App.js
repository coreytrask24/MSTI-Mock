
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Home from './components/pages/Home';
import Forum from './components/pages/Forum';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import BuildGuide from './components/pages/BuildGuide';
import Footer from './components/Footer';
import Comment from './components/pages/Comment';

function App(props) {
  //props.id
  return (
    <>

   <Navbar {...props}/>
   <Switch>
     <Route path='/' exact component= {Home}/>
     <Route path='/forum' component={Forum} />
     <Route path='/products' component={Products} />
     <Route path='/sign-up' component={SignUp} />
     <Route path='/buildguide' component={BuildGuide} />
     <Route path='/comment/:id' component={Comment} />

     

   </Switch>
   <div id="bottom">
   <Footer/>
   </div>
   
  </>
  );
}

export default withRouter(App);
