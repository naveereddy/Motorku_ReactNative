import React, {Component} from 'react';
import { View, StyleSheet, Text, Image,Dimensions,TouchableHighlight} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

//constants
import { NAVIGATION_BAR_COLOR, WHITE_COLOR } from '../Utils/Colors';
const {height,width} = Dimensions.get('window');
const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle:"Gunakan Kamera",
    chooseFromLibraryButtonTitle:"Buka Album Foto"
};
class ProfileScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            username:'T.Naveen Reddy',
            defaultImage: true,
            image:""
        }
        this.createImagePicker = this.createImagePicker.bind(this);
    }
    static navigationOptions = {
        headerTitle: "PROFIL",
        headerTintColor: "#fff",
        headerStyle:{
            backgroundColor: NAVIGATION_BAR_COLOR
        }
    }
    createImagePicker(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log("picture info",response)
            if (response.didCancel) {
              console.log('User cancelled photo picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              let source =  { uri: response.uri };
              // You can also display the image using data:
            //   let source = 'data:image/jpeg;base64,' + response.data;
              this.setState({
                image: source,
                defaultImage:false
              });
            }
          });
    }
    render(){
        return (
            <View style = {styles.Main}>
                <View style = {styles.profileView}>
                    <TouchableHighlight style={styles.roundImage} onPress={this.createImagePicker}>
                       {this.state.defaultImage?
                        <Image style ={styles.topMainView} source = {require('../Assets/img_profile_default.png')}/> :
                        <Image style ={styles.topMainView} source = {this.state.image}/>
                       }
                    </TouchableHighlight>
                    <Text style = {styles.userText}>{this.state.username}</Text>
                </View>
            </View>
        );
    }
}
const ProfileScreens = createStackNavigator({
    BRENDA: ProfileScreen
})
export default createAppContainer(ProfileScreens);
const styles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    profileView:{
        flex:1/3,
        alignItems:'center',
        backgroundColor: NAVIGATION_BAR_COLOR,
        borderColor:NAVIGATION_BAR_COLOR,
        borderWidth: 1,
        width :width,
        paddingTop:10
    },
    roundImage:{
        width:120,
        height:120,
        borderRadius:60
    },
    userText:{
        marginTop: 10,
        color: WHITE_COLOR
    },
    topMainView:{
        zIndex:10
    }
});