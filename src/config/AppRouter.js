import React from 'react'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"; 
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import Usersignup from '../components/Usersignup/Usersignup';
 

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={SignUp} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/usersignup' component={Usersignup} />
            </Switch>
        </Router>            
      
    )
}

export default AppRouter;
