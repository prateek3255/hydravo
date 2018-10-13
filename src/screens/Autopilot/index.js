import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, Text, Switch } from 'native-base';
import {StatusBar} from "react-native";
import styles from "./styles";
class Autopilot extends Component {
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
            <Title>Autopilot</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content style={styles.content}>
        <ListItem icon last>
            <Left>
                <Icon active name="autorenew" type="MaterialIcons" style={{color:"white"}}/>
            </Left>
            <Body>
              <Text style={{color:"white"}}>Autopilot Mode</Text>
            </Body>
            <Right>
              <Switch value={false} onTintColor="#50B948" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default Autopilot;