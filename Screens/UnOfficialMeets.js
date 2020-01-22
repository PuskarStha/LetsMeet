import React,{Component} from 'react';
import {Modal,Alert,View,Text,TouchableOpacity, Image, StyleSheet, BackHandler} from 'react-native';



class UnOfficialMeets extends Component {
    static navigationOptions = {
        header:null,
    };

    state={
        modalVisible:false,
    };

    constructor(props) {
        super(props);
       
      }

      setModalVisible(visible){
          this.setState({modalVisible: visible});
      }



    render(){
    return(
        <View style={Styles.Container}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={()=>{Alert.alert('Model has been closed');}}
           >
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'pink',height:200,width:200}}>
          
              <Text  >Hello World!</Text>

              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
          
          </View>

           </Modal>
            <View style ={Styles.Rmeeting}>
            <TouchableOpacity
            onPress={()=>{this.setModalVisible(true);
            }} >
                <View style={Styles.feed}>
                <Text style={Styles.text}>Unofficial Request a Meeting?</Text>
                </View>
            </TouchableOpacity>
            </View>

            <View style ={Styles.Rmeeting1}>
            <TouchableOpacity >
                <View style={Styles.feed}>
                <Text style={Styles.text}> See Unofficial Meeting Requests!!</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
  

    );

}
  
};
// Homepage.navigationOptions={
// headerTitle:'HomePage',
// headerRight:()=>(
//     <Button>
//         <Image source={require('../pics/setting.png')} style={{height:50, width:50,justifyContent:'center'}} />
//     </Button>
// ),

// };



export default UnOfficialMeets;

const Styles = StyleSheet.create({
    Rmeeting:{
     
    height:'50%',
    justifyContent:'center',
    
        
    },
    Rmeeting1:{
        
        height:'50%',
        justifyContent:'center'
        
        
        
    },
    Container:{
        flex:2,
        flexDirection:'column',
backgroundColor:'#b2b2ff',
padding:10,
justifyContent:'center',


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

