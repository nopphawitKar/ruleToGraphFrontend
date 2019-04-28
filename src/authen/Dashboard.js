import React, { Component } from 'react';
import '../App.css';
import { Container, Button, TextInput, Progress } from "nes-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../node_modules/nes.css/css/nes.css';
import * as Understand from '../quiz_part/Understand.js';
import Signup from './Signup.js';
import Login from './Login.js';

const HEADER_UNDERSTANDABILITY = "understandability test";

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginStatus: false,
      a: 'xxx',
      files: [],
      loginData: {},
      catMessage: ""
    };
    this.routLogin = this.routLogin.bind(this);
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  componentDidMount() {
    this.setState({loginStatus: this.props.loginStatus});
  }

  updateLoginStatus(status){
    this.props.updateLoginStatus(status);
  }

  routLogin = () => {
    return <div>
      <Login updateLoginStatus={this.updateLoginStatus} loginStatus={this.state.loginStatus}></Login>
      <Container className='nes-container-center-overwrite'>If you dont have an account! Sign up here
        <Link to='/signup'>
          <Button primary>Sign-up</Button>
        </Link>
      </Container>
    </div>;
  }

  render() {
    return (

        <div>
          <link href='https://fonts.googleapis.com/css?family=Press Start 2P' rel='stylesheet'/>
          {this.routLogin()}
          {/*<Container className='nes-container-center-overwrite' title='Log-in'>
            <TextInput label='username' labelInline></TextInput>
            <TextInput label='password' labelInline></TextInput>
            <Button primary>Log-in</Button>
          </Container>
          <Container className='nes-container-center-overwrite'>If you dont have an account! Sign up here
            <Button primary>Sign-up</Button>
          </Container>*/}
          {/*<div id='main_container'>
            <h2>All mission!</h2>
            <Container>
              <label className='progress-label'>8%</label>
              <Progress success max='8' value='3'></Progress>
              <Button primary>Start Mission</Button>
            </Container>
          </div>*/}
        </div>


    );
  }
}

export default Dashboard;
