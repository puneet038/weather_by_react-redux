import React from 'react';
import {Switch,Route} from 'react-router-dom';
import App from './App';
import Login from "./Login";
import Signup from "./Signup";


const Router = () => {
    return (
       <Switch>
           <Route exact path="/"component={Signup}/>
           <Route exact path="/login"component={Login}/>
           <Route exact path="/app"component={App}/>
           
       </Switch>
    )
}

export default Router
