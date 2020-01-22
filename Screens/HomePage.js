import React,{Component} from 'react';
import {View,Text,TouchableOpacity, FlatList, StyleSheet, BackHandler,ScrollView} from 'react-native';
import {USERS} from '../dummy-data/Dummy-data';
import MessageList from '../Styling/MessageList';





class Homepage extends Component {
    
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
       
     
      }

    

    render(){
       const renderListItem=(userdata)=>{
            return(
                <MessageList
                name={userdata.item.name}
                />
            );
        }
     
    return(
        <View style={Styles.Container}>
            <View style={Styles.friends}>
           <View style={{height:'20%'}}>
             
                <Text style={{color:'white'}} >Request a Meeting?</Text>
                <FlatList
                keyExtractor={(item,index)=>item.id}
                data={USERS}
                renderItem={renderListItem}
                horizontal={true}

                />
                </View>
                
                <View style={Styles.meetingRequests}> 
                <Text style={{  color:'black',alignSelf:'center'}}>Your Meeting details</Text>
                
                <ScrollView style={{paddingTop:10}}>
                    

<Text  style={{  color:'black',alignSelf:'center'}}>This is where meeting detail will pop up in list view.</Text>

</ScrollView>
            </View>
           
                </View>
              
            </View>

            
  

    );

}
  
};




export default Homepage;

const Styles = StyleSheet.create({
    friends:{
     
   height:'100%',
   backgroundColor:'orange',
   
    
        
    },
meetingRequests:{
        
       flex:1,
       
       
    
       height:'100%',
       backgroundColor:'white',
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
      
     
        
        
        
    },
    Container:{
        flex:1,
        
backgroundColor:'#b2b2ff',

},

    text:{
        padding:10
    },
    feed:{
       
       height:'80%',
        borderColor:'#00cc00',
        borderWidth:25,        
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        elevation:50
        
        
    }
});

