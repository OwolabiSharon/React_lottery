import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'

export default class CreateAccount extends React.Component {
  constructor(props){
    super(props)

    this.onChangeAccounName = this.onChangeAccounName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
    this.onsubmit = this.onsubmit .bind(this)

    this.state = {
      accountName: '',
      email: '',
      password:'',
      phoneNumber:'',
      display:''
    };
}

  onChangeAccounName(e){

    this.setState({
      accountName: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  onChangePhoneNumber(e){
    this.setState({
      phoneNumber: e.target.value
    })
  }
  onsubmit(e){
    e.preventDefault();
    const userData = {
      accountName: this.state.accountName,
      email: this.state.email,
      password:this.state.password,
      phoneNumber:this.state.phoneNumber,
    }
    console.log(userData);

    axios.post('http://localhost:3000/', userData)
      .then(res =>{
        if (res.data.message === "Account created.") {
          window.location = '/login'
        }else {
          this.setState({
            display: res.data.message
          })
        }

      })
      this.setState({
        display: "bad request"
      })


  }
  render() {
    return (
      <body>
      <div className="cover_div">
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
        <div className="signup-box">
            <h1>sign up</h1>
            <h4>create an account, this may be a scam but bro take the chance</h4>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
              <form onSubmit={this.onsubmit} className="add-option">
                <label>account Name</label>
                <input
                  type="text"
                   name="accountName"
                   className="add-option-input"
                   placeholder="account name"
                   onChange={this.onChangeAccounName}
                />
                <label>email</label>
                <input
                  type="text"
                   name="email"
                   className="add-option-input"
                   placeholder="email"
                   onChange={this.onChangeEmail}
                />
                <label>password</label>
                <input
                  type="text"
                   name="option"
                   className="add-option-input"
                   placeholder="password"
                   onChange={this.onChangePassword}
                />
                <label>phone number</label>
                <input
                  type="text"
                   name="option"
                   className="add-option-input"
                   placeholder="phone number"
                   onChange={this.onChangePhoneNumber}
                />

                <button className="button">create account</button>


              </form>

            <p> by clicking the signup button, you agree to our <NavLink to="/terms">terms and conditions</NavLink></p>
        </div>
        <h4>{this.state.display}</h4>
      <p className="loginP">already have an account??<NavLink to="/login">login here</NavLink></p>
      </div>
      </body>
    );
  }
}
