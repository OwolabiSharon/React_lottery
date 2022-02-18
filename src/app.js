import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import './styles/styles.css';
import AppRouter from './routers/lotteryRouter';


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
