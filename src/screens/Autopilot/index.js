import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, Text, Switch,Toast } from 'native-base';
import {StatusBar} from "react-native";
import styles from "./styles";
class Autopilot extends Component {
    constructor(props){
        super(props);
        this.state={
            autopilot:0
        }
    }
    
    componentDidMount(){
        fetch("http://things.ubidots.com/api/v1.6/variables/5bc2db32c03f9770edc328e7/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ")
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                autopilot:responseJson.results[0].value
            })
        })

    }
    setAutopilot=()=>{
        fetch("http://things.ubidots.com/api/v1.6/variables/5bc2db32c03f9770edc328e7/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ",{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value:this.state.autopilot==0?1:0
            }),
        }).then(()=>{
            this.setState({
                autopilot:this.state.autopilot==0?1:0
            })
            Toast.show({
                text: "Your settings have been saved successfuly.",
                buttonText: "Okay",
                type: "success",
                duration:3000
              })
        })


    }
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
        <ListItem icon last onPress={this.setAutopilot}>
            <Left>
                <Icon active name="autorenew" type="MaterialIcons" style={{color:"white"}}/>
            </Left>
            <Body>
              <Text style={{color:"white"}}>Autopilot Mode</Text>
            </Body>
            <Right>
              <Switch value={this.state.autopilot==1?true:false} onTintColor="#50B948" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default Autopilot;