import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, Text, Switch } from 'native-base';
import {StatusBar, WebView} from "react-native";
import styles from "./styles";
class Dashboard extends Component {
  render() {
    return (
      <Container>
          <StatusBar  barStyle="light-content" />
        <Header  androidStatusBarColor="#121212" style={styles.header}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content style={styles.content}>
       <WebView
       style={{height:250,width:250}}
        source={{uri:"https://app.ubidots.com/ubi/getchart/vS4lEhCuF6CXuh8b-R_niiwprkE"}}
       />
        </Content>
      </Container>
    );
  }
}

export default Dashboard;