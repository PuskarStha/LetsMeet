import React from 'react';
import {View,Text,ImageBackground,ScrollView} from 'react-native';




const MessageList=props=>{
    return(
        <View > 
      
        <View style={{height:100,width:100,alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:50,marginHorizontal:5}}>
           
    <Text>{props.name}</Text>
           
        </View>
       
        </View>
    );

};

export default MessageList;