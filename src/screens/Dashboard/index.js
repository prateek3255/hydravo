import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, ListItem, Text, Switch, Toast, Separator } from 'native-base';
import {StatusBar, WebView} from "react-native";
import styles from "./styles";
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      pump:0
    }
  }
  componentDidMount(){
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc2e009c03f9776a699fa64/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ")
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                pump:responseJson.results[0].value
            })
        })

  }
  setPump=()=>{
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc2e009c03f9776a699fa64/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            value:this.state.pump==0?1:0
        }),
    }).then(()=>{
        this.setState({
            pump:this.state.pump==0?1:0
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
            <Title>Dashboard</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content style={styles.content}>
        <ListItem icon last onPress={this.setPump}>
            <Left>
                <Icon active name="water-pump" type="MaterialCommunityIcons" style={{color:"white"}}/>
            </Left>
            <Body>
              <Text style={{color:"white"}}>Pump</Text>
            </Body>
            <Right>
              <Switch value={this.state.pump==1?true:false} onTintColor="#50B948" />
            </Right>
          </ListItem>
          <Separator bordered>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Moisture Readings</Text>
          </Separator>
       <WebView
       style={styles.webViews}
        source={{uri:"https://app.ubidots.com/ubi/getchart/kPG8GLJ9TUv0t7547BX2ZyFYXz4"}}
       />
       <Separator bordered>
            <Text style={{fontSize:16,fontWeight:'bold'}}>FlowRate graph</Text>
          </Separator>
       <WebView
       style={styles.webViews}
        source={{uri:"https://app.ubidots.com/ubi/getchart/YLJlNdKzN7VtF639KSk9hDUCwok"}}
       />
        </Content>
      </Container>
    );
  }
}

export default Dashboard;