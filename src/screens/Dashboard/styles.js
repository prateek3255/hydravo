const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth=Dimensions.get("window").width;

export default{
    header:{
        backgroundColor:"#121212"
    },
    content:{
        backgroundColor:"#1A1A1A"
    }
};
