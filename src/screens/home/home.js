import React, { Component } from "react";
import { ImageBackground, View, StatusBar,  BackHandler, AsyncStorage, Modal, Image } from "react-native";
import { Container, Button, H3, Text, Item, Input, Icon, Toast } from "native-base";
import * as Animatable from 'react-native-animatable';
import SwitchSelector from 'react-native-switch-selector';

import styles from "./styles";

const bg = require("../../../assets/plant.png");
MyIcon = Animatable.createAnimatableComponent(Icon);
const options = [
    { label: 'Manual', value: '0' },
    { label: 'Autopilot', value: '1' },
];


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
        auto:0,
        pump:0,
        showModal:false
    }
  }
  componentDidMount(){
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
    this.getMoisture();
    this.getWater();
    this.getPump();
    this.getAutopilot();
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
  getPump=()=>{
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc2e009c03f9776a699fa64/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ")
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
            pump:responseJson.results[0].value
        })
        setTimeout(this.getPump,3000)
    })
  }
  getAutopilot=()=>{
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc2db32c03f9770edc328e7/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ")
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
            auto:responseJson.results[0].value
        })
        this.dateSelectorSwitch.toggleItem(responseJson.results[0].value);
        setTimeout(this.getAutopilot,3000)
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

  setAutopilot=(value)=>{
    fetch("http://things.ubidots.com/api/v1.6/variables/5bc2db32c03f9770edc328e7/values?token=A1E-74Vv8no41wGGLHzAlM7Y14STQhG2PQ",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            value:value
        }),
    }).then(()=>{
        this.setState({
            auto:value
        })
        // Toast.show({
        //     text: "Your settings have been saved successfuly.",
        //     buttonText: "Okay",
        //     type: "success",
        //     duration:3000
        //   })
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
            value:1
        }),
    }).then(()=>{
        this.setState({
            pump:1,
            showModal:false,
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

                {/* <Button iconLeft rounded style={styles.autopilotButton} onPress={()=>this.props.navigation.navigate("Autopilot")}>
                    <Icon name='home-automation' type="MaterialCommunityIcons"/>
                    <Text uppercase={false}>View Autopilot Settings</Text>
                </Button> */}
                <SwitchSelector ref={(ref) => { this.dateSelectorSwitch = ref; }} options={options} style={styles.autopilotButton} initial={this.state.auto} onPress={value => this.setAutopilot(value)} />




                
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
                <Image source={this.state.moisture<0?{uri:"https://media.giphy.com/media/XSTtrAN0rJfy/giphy.gif"}:{uri:"https://media.giphy.com/media/l4FGzgD8mJwqUsIyQ/giphy.gif"}} style={styles.modalImage}/>
                {this.state.moisture>0?
                    <View style={styles.modalTextView}>
                        <Text style={styles.aliveText}>Your plant is doing well, keep it up!!</Text>
                        <View style={styles.textButtons}>
                            <Text style={{color:"white",fontWeight:"bold"}} onPress={()=>{this.setState({showModal:false})}}>Cancel</Text>
                            <Text style={{color:"grey",fontWeight:"bold"}} onPress={this.setPump}>{this.state.pump==0?"Start pump anyways":"Pump already running"}</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.modalTextView}>
                        <Text style={styles.deadText}>Your plant might be dying, irrigate now...</Text>
                        <View style={styles.textButtons}>
                            <Text style={{color:"white",fontWeight:"bold"}} onPress={()=>{this.setState({showModal:false})}}>Cancel</Text>
                            <Text style={{color:"green",fontWeight:"bold"}} onPress={this.setPump}>{this.state.pump==0?"Start irrigating now":"Pump already running"}</Text>
                        </View>
                    </View>
                }
                
              </View>
            </View>
          </Modal>



      </Container>
    );
  }
}

export default Home;
