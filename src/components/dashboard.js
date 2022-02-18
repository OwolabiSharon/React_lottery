import React, {useEffect,useRef,useState} from 'react';
import useCountdown from './timerSet';
import jwtToken from './login';
import {NavLink} from 'react-router-dom';
import { VictoryPie } from "victory";
import axios from 'axios';

export default class Dashboard extends React.Component {

  constructor(props){
    super(props)

    this.onsubmit = this.onsubmit.bind(this)



    this.state = {
      accountName: '',
      balance: '',
      totalPrice:'',
      display:'',
      myData :[
        { x: "winning", y: 0 },
        { x: "losing", y: 0 },
      ],
      notification_title:"",
      notification_body:"",
      notificationNumber:""
    };
}

componentWillMount() {

        alert(
          this.state.notification_body
        );
  }

componentWillMount() {
  axios.post('http://localhost:3000/dashboardInfo',{},{ headers: { Authorization : 'Bearer ' + localStorage.getItem('token')}})
    .then(res =>{
      if (res.data.message === "fetched successfully") {
        this.setState({
          accountName: res.data.data.accountName,
          balance: res.data.data.balance,
          totalPrice: res.data.data.totalPrice,
          myData :[
            { x: "winning", y: res.data.data.winning },
            { x: "losing", y: res.data.data.losing },
          ]
        })
      }else {
        this.setState({
          display: res.data.data.message
        })
      }

    });

  axios.post('http://localhost:3000/viewNotification',{},{ headers: { Authorization : 'Bearer ' + localStorage.getItem('token')}})
    .then(res =>{
      if (res.data.message === "fetched successfully") {
        this.setState({
          notification_title:res.data.data.displayedNotification.title,
          notification_body:res.data.data.displayedNotification.body,
          notificationNumber:res.data.data.notificationNumber
        })
        console.log(res.data);
      }else {
          this.setState({
            display: res.data.message
          })
        }
      });
}

onsubmit(e){
  e.preventDefault();
  axios.post('http://localhost:3000/buyTicket',{},{ headers: { Authorization : 'Bearer ' + localStorage.getItem('token')}})
    .then(res =>{
      if (res.data.data.message === "ticket bought we hope you win ") {
        this.setState({
          display: res.data.data.message
        })

        window.location.reload(false);
      }else {
        this.setState({
          display: res.data.data.message
        })
      }

    })
    this.setState({
      display: "error occured"
    })
}


render() {
  return (
    <body>
    <div className = "navbar2">
      <h3 className = "header_h1"> lottery </h3>
         <ul className = "header_list">
            <li className = "header_listitem2">
              <NavLink to="/" activeClassName="is-active" exact={true} className = "header_listitem2">home page</NavLink>
            </li>
            <li className = "header_listitem2">
              <NavLink to="/create" activeClassName="is-active"className = "header_listitem2">  create account</NavLink>
            </li>
            <li className = "header_listitem2">
              <NavLink to="/terms" activeClassName="is-active" className = "header_listitem2">terms</NavLink>
            </li>
         </ul>
    </div>
    <h1>Dashboard</h1>
    <h4>the money you have here is borrowed right?? great</h4>
    <div className="dashboard">
      <div className="signup-box">
          <h1>user info</h1>
          <h4>make sure to borrow ajo money, it always turns out fine</h4>
            <form onSubmit={this.onsubmit} className="add-option">
              <h2>{this.state.accountName}</h2>
              <h2>balance: #{this.state.balance}</h2>
              <h2>total price: #{this.state.totalPrice}</h2>
              <h3>your chane of winning</h3>
              <div class="pie"><VictoryPie
                  data={this.state.myData}
                  colorScale={["green", "crimson"]}
                  radius={100}
              /></div>

            </form>

      </div>

      <div className="signup-box">
          <h1>ticket booth</h1>
          <h4>70% of lottery winners go bankrupt after 3 years</h4>
            <form onSubmit={this.onsubmit} className="add-option">
              <button className="buttonbuy">buy ticket</button>
              <h4>{this.state.display}</h4>

            </form>
            <form className="add-option">
            <label>send funds to your lottery account</label>
          <NavLink to="/topUp"><button className="button">top up</button></NavLink>
          <button className="button" onClick={this.notification}>notifications({this.state.notificationNumber})</button>
          <h3>{this.state.notification_title}</h3>
          <h3>{this.state.notification_body}</h3>
          </form>

      </div>
    </div>
    </body>
  );
}
}
