import React from "react";
import "./LoginPage.css";

import { config } from "./Config";
import { PublicClientApplication } from "@azure/msal-browser";
import { Component } from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  BufferLoginButton,
  TelegramLoginButton,
  AppleLoginButton,
  DiscordLoginButton,
  SlackLoginButton,
  OktaLoginButton,
  YahooLoginButton,
} from "react-social-login-buttons";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
    };
    this.login = this.login.bind(this);
    this.PublicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }
  async login() {
    try {
      await this.PublicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      this.setState({ isAuthenticated: true });
    } catch (err) {
      this.setState({
        isAuthenticated: false,
        user: {},
        error: err,
      });
    }
  }
  logout() {
    this.PublicClientApplication.logout();
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          {this.state.isAuthenticated ? (
            <p></p>
          ) : (
            <p>
              <button onClick={() => this.login()}>login </button>
              <MicrosoftLoginButton onClick={() => this.login()} />
            </p>
          )}
        </header>
      </div>
    );
  }
}

export default LoginPage;
