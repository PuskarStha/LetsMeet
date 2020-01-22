import React,{Component} from 'react';
import {  View,Text, TextInput,Button,StyleSheet,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class SignUp extends Component {
    constructor(props){
        super(props);
    }
   render(){
return(  
    <View style={Styles.Container}>
    
        <ScrollView>
            
        <View style={{paddingBottom:15}}>
                <Text style={Styles.text}> Please fill the following form to signUp.</Text>
                <Text style={Styles.text1}>First Name</Text>
                <TextInput style={Styles.textInput} />
                <Text style={Styles.text1}>Last Name</Text>
                <TextInput style={Styles.textInput} />

                <Text style={Styles.text1}>office Name</Text>
                <TextInput style={Styles.textInput} />

                <Text style={Styles.text1}>Post</Text>
                <TextInput textContentType='jobTitle' style={Styles.textInput} />

                <Text style={Styles.text1}>Date of birth</Text>
           
                <TextInput style={Styles.textInput} />
                </View>

          

               
                <View style={Styles.button}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate({routeName:'Homepage'})}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
         
                </ScrollView>
        
        
       
    </View>
   
);
   }
};

    

const Styles = StyleSheet.create({
    Container: {
        flex:1,
     backgroundColor: '#b2b2ff',
   padding:20
    
        

    },
    text: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize:15,
        paddingVertical:20,
        color:'white'
        
    },
    text1:{
      
        color:'white',
        fontSize:15,
        padding:20
    },
    button: {
         backgroundColor:'#ef4445',
         alignItems:'center',
         borderRadius:15,
         padding:20,
         elevation:20
         
        
        
    },
    textInput: {
        paddingHorizontal:35,
        backgroundColor: 'white',
        borderRadius: 20,

    }
});

export default SignUp;