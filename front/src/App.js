import React from 'react'
import Header from './component/Header/Header';
import './App.css';
import Homepage from './component/Homepage';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import ProductDetail from './component/ProductDetails/ProductDetail';
import Profile from './component/Profile/Profile';

function App() {
  return (
    
    
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ Homepage}/>
        
           
          
      
            
          
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path='/profile/:user' component={ Profile}/>
            
        
        </Switch>
   
      
    </Router >
       
  );
}

export default App;
