const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth=Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  parentView:{
    flex:1,
    alignItems: "center",
    backgroundColor: "transparent",  
  },
  loginView:{
    flex:1,
    alignItems: "center",
    marginTop: deviceHeight/5,
    width:deviceWidth*(4/5),
    backgroundColor: "transparent",    
  },
  loginButton:{
     backgroundColor: "green", 
     alignSelf: "center",
     marginTop:deviceHeight/15 
  },
  input:{
    alignSelf:"center",
    marginTop:20,
  },
  inputBox:{
    textAlign:"center",
    color:"white",
    // backgroundColor:"red"
    
  },
  text: {
    color: "white",
    bottom: 6,
    marginTop: 5,
    textAlign:"center"
  },

//Homepage styles
header:{
  marginTop:deviceHeight/25,
  flexDirection:"row",
  justifyContent:"flex-end",

},
headerIcon:{
  color:"white",
  marginRight:deviceWidth/20
},
homeMain:{
  flex:1,
  marginTop: deviceHeight/25,
  alignItems:"center",
  
},
headText:{
  color:"white",
  marginTop:deviceHeight/50,
  fontWeight:"bold"
},
listView:{
  width:deviceWidth*(4/5),
  marginTop:deviceHeight/30
},
listItem:{
  flexDirection:"row",
  marginTop:deviceHeight/15
},
listIcon:{
  flex:0.2
},
listText:{
  flex:0.55
},
listData:{
  flex:0.25
},
iconWater:{
  color:"blue"
},
iconPlant:{
  color:"green"
},
textStyle:{
  color:"white",
  fontWeight:"bold"
},
dashboardButton:{
  backgroundColor:"#DB5D3B",
  marginTop:deviceHeight/15,
  width:deviceWidth*(4/5),
  justifyContent:"center",
  marginBottom:deviceHeight/30
},
autopilotButton:{
  marginTop:deviceHeight/30,
},

//modal styles
modalBackground:{
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent:'center',
  backgroundColor: '#00000090'
},

modalView:{
  backgroundColor:"#222325",
  width:deviceWidth*(4/5),
  height:deviceHeight*(0.75),
},

modalImage:{
  height:deviceHeight*(0.60),
  width:deviceWidth*(4/5)
},
modalTextView:{
  marginTop:deviceHeight/75,
},
aliveText:{
  textAlign:"center",
  fontWeight:"bold",
  color:"green"
},
deadText:{
  textAlign:"center",
  fontWeight:"bold",
  color:"red"
},
textButtons:{
  marginTop:deviceHeight/75,
  flexDirection:"row",
  justifyContent:"space-evenly"
}


};
