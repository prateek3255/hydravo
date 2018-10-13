import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Item, Input, Icon } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");

class Home extends Component {
  render() {
    return (
      <Container >
        <StatusBar barStyle="light-content" />
        <View style={styles.homeMain}>
            <H3 style={styles.headText}>Hi John Doe,</H3>
            <H3 style={styles.headText}>Let's take a look at your garden...</H3>
            <View style={styles.listView}>
            <View style={styles.listItem}>
                <View style={styles.listIcon}>
                    <Icon name="ios-water" style={styles.iconWater}/>
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
                    <Icon name="flower" type="MaterialCommunityIcons" style={styles.iconPlant}/>
                    </View>
                    <View style={styles.listText}>
                        <Text style={styles.textStyle}>Plant 1</Text>
                    </View>
                    <View style={styles.listData}>
                        <Text style={styles.textStyle}>399</Text>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={styles.listIcon}>
                    <Icon name="flower" type="MaterialCommunityIcons" style={styles.iconPlant}/>
                    </View>
                    <View style={styles.listText}>
                        <Text style={styles.textStyle}>Plant 1</Text>
                    </View>
                    <View style={styles.listData}>
                        <Text style={styles.textStyle}>399</Text>
                    </View>
                </View>
                
            </View>
        </View>
      </Container>
    );
  }
}

export default Home;
