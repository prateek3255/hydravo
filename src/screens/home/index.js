import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Item, Input } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");

class Login extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.parentView}>
            <View style={styles.loginView}>
              <H3 style={styles.text}>Hey, there!</H3>
              <Item rounded style={styles.input}>
              <Input style={styles.inputBox}   placeholder='Login Id'/>
            </Item>
            <Item rounded style={styles.input}>
              <Input style={styles.inputBox}  secureTextEntry placeholder='Password'/>
            </Item>
            <Button
              style={styles.loginButton}
              onPress={() => this.props.navigation.navigate("Home")}
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
