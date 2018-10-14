import React, { Component } from "react";
import { ImageBackground, View, StatusBar,  BackHandler, AsyncStorage, Modal, Image } from "react-native";
import { Container, Button, H3, Text, Item, Input, Icon } from "native-base";
import * as Animatable from 'react-native-animatable';

import styles from "./styles";

const bg = require("../../../assets/download.jpeg");
MyIcon = Animatable.createAnimatableComponent(Icon);


class Home extends Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props){
    super(props);
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
    this.state={
        moisture:0,
        water:0,
        showModal:false
    }
  }
  componentDidMount(){
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
    this.getMoisture();
    this.getWater();
  }

  getMoisture=()=>{
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc21e34c03f9719efe9d15e/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ")
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
            moisture:responseJson.results[0].value
        })
        setTimeout(this.getMoisture,3000)
    })
  }
  getWater=()=>{
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc23bfbc03f973c0500ef22/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ")
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
            water:responseJson.results[0].value
        })
        setTimeout(this.getWater,3000)
    })
  }

  onBackButtonPressAndroid = () => {
    BackHandler.exitApp();
  };

  logout=()=>{
    AsyncStorage.setItem("logged","",()=>{
        this.props.navigation.navigate("Login")
      })
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }
  render() {
    return (
      <Container style={{backgroundColor:"black"}}>
        <StatusBar barStyle="light-content" />
        {/* <ImageBackground source={bg} style={styles.imageContainer}> */}
        <View style={styles.header}>                
            <MyIcon name={this.state.moisture<0?"notifications-active":"notifications"} type="MaterialIcons" onPress={()=>{this.setState({showModal:true})}} style={[styles.headerIcon,this.state.moisture<0?{color:"red"}:{color:"white"}]} animation={this.state.moisture<0?"rubberBand":""} iterationCount="infinite" duration={2000}/>
            <Icon name='logout' style={styles.headerIcon} onPress={this.logout} type="MaterialCommunityIcons"/>
                
        </View>
        <View style={styles.homeMain}>
            
            <H3 style={styles.headText}>Hi John Doe,</H3>
            <H3 style={styles.headText}>Let's take a look at your garden...</H3>
            <View style={styles.listView}>
            <View style={styles.listItem}>
                <View style={styles.listIcon}>
                    <MyIcon name="ios-water" style={styles.iconWater} animation="slideInDown" duration={2000}/>
                    </View>
                    <View style={styles.listText}>
                        <Text style={styles.textStyle}>Water Saved</Text>
                    </View>
                    <View style={styles.listData}>
                        <Text style={styles.textStyle}>{this.state.water/1000} L</Text>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={styles.listIcon}>
                    <MyIcon name="flower" type="MaterialCommunityIcons" style={styles.iconPlant} animation="zoomIn" duration={2000}/>
                    </View>
                    <View style={styles.listText}>
                        <Text style={styles.textStyle}>Plant 1 Moisture content</Text>
                    </View>
                    <View style={styles.listData}>
                        <Text style={styles.textStyle}>{this.state.moisture}%</Text>
                    </View>
                </View>


                <Button iconLeft rounded style={styles.dashboardButton} onPress={()=>this.props.navigation.navigate("Dashboard")}>
                    <Icon name='dashboard' type="FontAwesome"/>
                    <Text uppercase={false}>View Dashboard</Text>
                </Button>

                <Button iconLeft rounded style={styles.autopilotButton} onPress={()=>this.props.navigation.navigate("Autopilot")}>
                    <Icon name='home-automation' type="MaterialCommunityIcons"/>
                    <Text uppercase={false}>View Autopilot Settings</Text>
                </Button>

                
            </View>
        </View>
        {/* </ImageBackground> */}




        <Modal
            animationType="none"
            transparent={true}
            visible={this.state.showModal}
            onRequestClose={() => {
              this.props.navigation.goBack()
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>
                <Image source={{uri:"https://media.giphy.com/media/l4FGzgD8mJwqUsIyQ/giphy.gif"}} style={{height:384,width:480}}/>

              </View>
            </View>
          </Modal>



      </Container>
    );
  }
}

export default Home;
