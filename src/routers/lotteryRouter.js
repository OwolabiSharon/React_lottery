import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Login from '../components/login';
import Create from '../components/create';
import Dashboard from '../components/dashboard';
import Topup from '../components/topup';
import Terms from '../components/terms';
// import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Home from '../components/Home';


const AppRouter = () => (
  <BrowserRouter>
  <div>
     <Switch>
         <Route path="/login" component={Login} exact={true}/>
         <Route path="/create" component={Create}/>
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/topUp" component={Topup}/>
         <Route path="/terms" component={Terms}/>
         <Route path="/" component={Home} exact={true}/>
         <Route component={NotFoundPage}/>
     </Switch>
  </div>

  </BrowserRouter>
)

export default AppRouter;
