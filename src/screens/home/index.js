import React, { Component } from "react";
import { ImageBackground, View, StatusBar, AsyncStorage } from "react-native";
import { Container, Button, H3, Text, Item, Input } from "native-base";
import Spinner from "../Spinner/spinner"

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      login:"",
      password:"",
      data:true
    }
  }
  componentWillMount(){
    AsyncStorage.getItem("logged").then((value)=>{
      if(value!=null)
      this.props.navigation.navigate("Home")
      else
      this.setState({
        data:false
      })
    })
  }
  login=()=>{
    if(this.state.login=="johndoe"&&this.state.password=="hackinout")
    AsyncStorage.setItem("logged","true",()=>{
      this.props.navigation.navigate("Home")
    })
    else
      alert("Wrong username or password")

  }
  render() {
    if(this.state.data)
      return <Spinner/>
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.parentView}>
            <View style={styles.loginView}>
              <H3 style={styles.text}>Hey, there!</H3>
              <H3 style={styles.text}>You need to login first to get started.</H3>
              <Item rounded style={styles.input}>
              <Input style={styles.inputBox} onChangeText={(login)=>{this.setState({login:login})}}   placeholder='Login Id'/>
            </Item>
            <Item rounded style={styles.input}>
              <Input style={styles.inputBox} onChangeText={(password)=>{this.setState({password:password})}}  secureTextEntry placeholder='Password'/>
            </Item>
            <Button
              style={styles.loginButton}
              onPress={this.login}
            >
              <Text style={styles.text}>Login</Text>
            </Button>
            </View>
          </View>


        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
