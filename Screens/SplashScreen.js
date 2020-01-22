import React,{Component} from 'react';
import {View,Text,StatusBar,ImageBackground, ActivityIndicator} from 'react-native';


 class SplashScreen extends Component {
     componentDidMount(){
        setTimeout(() => {
       this.props.navigation.navigate({routeName:'login'})
        }, 2000);
     };

     static navigationOptions = {
         header:null,
     };
    render(){
        return(
            <View style={{backgroundColor:'#b2b2ff' ,justifyContent:'center',height:'100%'}}>
                   <StatusBar
            barStyle="default"

            backgroundColor="#b2b2ff"/>
            <ImageBackground 
            source={require('../pics/meeting.png')} style={{height:'90%'}}>
            <View style={{justifyContent:'center', height:'100%',alignItems:'center'}}>
                <ActivityIndicator size='large' color='blue'/>
            </View>
            </ImageBackground>
            </View>
            
            

        );
    }
}


export default SplashScreen;