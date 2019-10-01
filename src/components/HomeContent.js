import React from 'react'
import { Component } from 'react';
import { Auth } from 'aws-amplify';

class HomeContent extends Component {
    
  handleRegister = () => {
    console.log("HomeContent::handleRegister, auth:", this.props.auth);
    this.props.history.push("/registry")
  }  

  handleLogin = () => {
    console.log("HomeContent::handleLogin, auth:", this.props.auth);
  }  

  handleForgotPassword = () => {
    console.log("HomeContent::handleForgotPassword, auth:", this.props.auth);
  }  

  handleChangePassword = () => {
    console.log("HomeContent::handleChangePassword, auth:", this.props.auth);
  }  

  handleLogout = (event) => {
    console.log("HomeContent::handleLogin, auth:", this.props.auth);
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }
    catch (error) {
      console.log(error.message)
    }
  }  

  render() {
    console.log("HomeContent::render, auth:", this.props);
    return (
        <section className="container">
            <div className="columns features">
                
                <div className="column is-3">
                    <div className="card is-shady">
                        <div className="card-content big-button">
                            <a href="/register">
                                <div className="content" onClick={this.handleRegister}>
                                    <h4>Register</h4>
                                    <p>Click here to register using aws-amplify Auth.signUp(..)</p>
                                    <p><a href="/">Learn more</a></p>                                
                                </div>  
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="column is-3">
                    <div className="card is-shady">
                        <div className="card-content big-button">
                            <a href="/login">
                                <div className="content" onClick={this.handleLogin}>
                                    <h4>Login</h4>
                                    <p>Click here to register using aws-amplify Auth.signIn(..)</p>
                                    <p><a href="/">Learn more</a></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="column is-3">
                    <div className="card is-shady">
                        <div className="card-content big-button">
                            <a href="/logout">
                                <div className="content" onClick={this.handleLogout}>
                                    <h4>Logout</h4>
                                    <p>Click here to register using aws-amplify Auth.signOut(..)</p>
                                    <p><a href="/">Learn more</a></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="column is-3">
                    <div className="card is-shady">
                        <div className="card-content big-button">
                            <a href="/forgotpassword">
                                <div className="content" onClick={this.handleForgotPassword}>
                                    <h4>Forgot Password</h4>
                                    <p>Click here to register using aws-amplify Auth.forgotPassword(..)</p>
                                    <p><a href="/">Learn more</a></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="column is-3">
                    <div className="card is-shady">
                        <div className="card-content big-button">
                            <a href="/changepassword">
                                <div className="content" onClick={this.handleChangePassword}>
                                    <h4>Change Password</h4>
                                    <p>Click here to register using aws-amplify Auth.changePassword(..)</p>
                                    <p><a href="/">Learn more</a></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
  }
}

export default HomeContent;