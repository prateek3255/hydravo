import {View,ActivityIndicator} from "react-native";
import React, {Component} from "react";


class Spinner extends Component{

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#00000050'}}>
                <ActivityIndicator
                style={{ height: 80 }}
                color="#C00"
                size="large"
              />           
                
            </View>
        )
    }
}
export default Spinner;




