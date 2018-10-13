import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, Text, Switch } from 'native-base';
import {StatusBar} from "react-native";
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
        
        </Content>
      </Container>
    );
  }
}

export default Dashboard;