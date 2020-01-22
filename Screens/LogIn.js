import React, { Component } from 'react';
import { View, Text, TouchableOpacity,TouchableHighlight,Modal, TextInput, StyleSheet, Image ,Alert } from 'react-native';

class LogIn extends Component  {
    
   
    static navigationOptions = {
             header: null,
         };

         state={
             modalVisible: false,
         };
       
         setModalVisible(Visible){
             this.setState({modalVisible: Visible});
         }
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={Styles.Container}>
<View  >
<Modal
          animationType="slide"
         transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
           this.setModalVisible(!this.state.modalVisible);
          }}>
              <View style={{flex:2,flexDirection:'column',height:'100%'}}>
              <View style={{height:'60%',}}>

              </View>
             
          <View style={Styles.container2}>
                <Text style={Styles.text}> Please Login! </Text>
                    <View style={Styles.login} >
                        <View style={{ padding: 10 }}>
                            <TextInput placeholderTextColor='black' style={Styles.textInput} textContentType='emailAddress' placeholder='Email Id...' />
                        </View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholderTextColor='black'
                                textContentType='password'
                                secureTextEntry={true}
                                placeholder='Password...'
                                style={Styles.textInput}
                            />
                             <View style={{ paddingVertical: 15 }}>
                            <TouchableOpacity
                                style={Styles.button}
                               
                               onPress={()=>this.props.navigation.navigate({routeName:'Homepage'},this.setModalVisible(!this.state.modalVisible))}
                            >
                                <Text style={Styles.text}>Login</Text>
                            </TouchableOpacity>

                        </View>
                        </View>
                        </View>
                        </View>
                        
                        </View>
        </Modal>
        </View>         
            <View style={Styles.Container}>
             
                <View style={Styles.image}>
                    <Image source={require('../pics/meeting.png')} style={{ height: '80%', width: '100%', padding: 10 }} />
                </View>

                <View style={Styles.container1}>
                <Text style={Styles.text}> Please Login! </Text>
                    <View style={Styles.login} >
                        {/* <View style={{ padding: 10 }}>
                            <TextInput placeholderTextColor='black' style={Styles.textInput} textContentType='emailAddress' placeholder='Email Id...' />
                        </View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholderTextColor='black'
                                textContentType='password'
                                secureTextEntry={true}
                                placeholder='Password...'
                                style={Styles.textInput}
                            />
                        </View> */}
                        <View style={{ paddingVertical: 15 }}>
                            <TouchableOpacity
                                style={Styles.button}
                               
                               onPress={()=>this.setModalVisible(true)}
                            >
                                <Text style={Styles.text}>Login</Text>
                            </TouchableOpacity>

                        </View>


                    </View>


                    <View style={Styles.signup}>
                        <Text style={Styles.text}>Don't have an account? sign up below.</Text>
                        <TouchableOpacity
                            style={Styles.button}
                            color='purple'
                           onPress={()=>this.props.navigation.navigate({routeName:'Signup'}) }
                        >
                            <Text style={Styles.text}>SignUp</Text>
                        </TouchableOpacity>


                    </View>
                </View>

            </View>
            </View>


        );
    }
};

export default LogIn;

const Styles = StyleSheet.create({
    Container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#b2b2ff',
        height: '100%',



    },
    container1: {
        backgroundColor: "rgba(6,5,5,0.3)",
        borderRadius: 20
    },
    container2: {
        backgroundColor: 'pink',
        borderRadius: 20,
        
        justifyContent:'space-around'
    },
    image: {

        justifyContent: 'center',
        overflow: 'hidden',
    },
    login: {

        padding: 15

    },
    signup: {

        height: '20%',
        padding: 10
    },

    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 15,

    },
    text1: {
        paddingHorizontal: 20,
        color: '#ffffff',
        fontSize: 15
    },
    button: {
        borderRadius: 15,
        elevation: 20,
        shadowRadius: 10,
        shadowColor: 'black',
        width: '100%',
        backgroundColor: '#00cc00',
        color: 'black',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
       
    },
    textInput: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 15,


    }
});