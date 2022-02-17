import React from 'react';
import Create from './create';
import Dashboard from './dashboard';
import Header from './header';
import Login from './login';
import Topup from './topup';

export default class lotteryApp extends React.Component {
  state = {
    accountName: '',
    email: '',
    password:'',
    phoneNumber:'',
    tickets:[],
    accountBalance:''
  };

  render() {
    return (
      <div>


      </div>
    );
  }
}
