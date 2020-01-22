import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, } from 'react-navigation';
import {FontAwesome5} from 'react-native-vector-icons';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import Homepage from '../Screens/HomePage';
import SplashScreen from '../Screens/SplashScreen';
import UnOfficialMeets from '../Screens/UnOfficialMeets';



const FadeTransition = (index, position) => {
    const sceneRange = [index - 1, index];
    const outputOpacity = [0, 1];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity,
    });
    return {
        opacity: transition
    }


}

const BottomTransition = (index, position, height) => {
    const sceneRange = [index - 1, index, index + 1];
    const outputHeight = [height, 0, 0];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputHeight,
    });
    return {
        transform: [{ translateY: transition }]
    }
}
const NavigationConfig = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const position = sceneProps.position;
            const scene = sceneProps.scene;
            const index = scene.index;
            const height = sceneProps.layout.initHeight;
            return FadeTransition(index, position);
            //return BottomTransition(index, position, height);
        }
    }
}




const tabNavigator = createBottomTabNavigator({
Homepage:{screen:Homepage,
},
Unofficialmeets:{screen:UnOfficialMeets,
  
},

},{
tabBarOptions: {
    activeTintColor: '#ffffff',
    inactiveTintColor:'#000000',
    adaptive:true,
    labelStyle: {
      fontSize: 12,
      fontWeight:'500',
      alignItems:'center',
      paddingBottom:5,
      
    },
    style: {
      backgroundColor: '#8e8ecc',
     
    },
  }
}
)

const Navigator = createStackNavigator({
    splashScreen: {
        screen: SplashScreen,
    },
    login: {
        screen: LogIn,

    },
    Signup: {
        screen: SignUp,
        navigationOptions: {
            headerTitle:'SignUp',}
    },
    Homepage: {
        screen: tabNavigator,
        navigationOptions: {
            headerTitle:'HomePage',
            headerStyle: {

                backgroundColor: '#b2b2ff'
            }
        }
    },
   





}, {
    initialRouteName: 'splashScreen',
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: '#b2b2ff',

        },
        headerTintColor: 'white',

        headerTitle: 'MeetingScheduler',




    },
    transitionConfig: NavigationConfig,
});



export default createAppContainer(Navigator);