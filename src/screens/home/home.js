import React, { Component } from "react";
import { ImageBackground, View, StatusBar,  BackHandler } from "react-native";
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
  }
  componentDidMount(){
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
  );
  }

  onBackButtonPressAndroid = () => {
    BackHandler.exitApp();
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }
  render() {
    return (
      <Container style={{backgroundColor:"black"}}>
        <StatusBar barStyle="light-content" />
        {/* <ImageBackground source={bg} style={styles.imageContainer}> */}
        <View style={styles.homeMain}>
            <H3 style={styles.headText}>Hi John Doe,</H3>
            <H3 style={styles.headText}>Let's take a look at your garden...</H3>
            <View style={styles.listView}>
            <View style={styles.listItem}>
                <View style={styles.listIcon}>
                    <MyIcon name="ios-water" style={styles.iconWater} animation="slideInDown" duration={2000}/>
                    </View>
                    <View style={styles.listText}>
                        <Text style={styles.textStyle}>Water left</Text>
                    </View>
                    <View style={styles.listData}>
                        <Text style={styles.textStyle}>399</Text>
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
                        <Text style={styles.textStyle}>399</Text>
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
      </Container>
    );
  }
}

export default Home;
