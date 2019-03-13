import React, {Component} from 'react';
import { View, Text, Image,TouchableHighlight, ScrollView, FlatList, AsyncStorage} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import { styles } from "./styles"
import { NAVIGATION_BAR_COLOR} from '../../Utils/Colors';
import {saveProfileImage } from '../../Utils/Constants'
import  UserList from '../../components/UserList'
import {getUserProfileRequest} from '../../Actions/ProfileAction'
import { connect } from 'react-redux'
import Loader from '../../components/Loader'

//constants
const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle:"Gunakan Kamera",
    chooseFromLibraryButtonTitle:"Buka Album Foto"
};
class ProfileScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:'T.Naveen Reddy',
            defaultImage: true,
            imageUrl:null,
            users:[],
            isLoading: false
        }
       AsyncStorage.getItem('profileImage').then(image =>{
            this.setState({
                imageUrl: image
            });
       })
        this.createImagePicker = this.createImagePicker.bind(this);
        const { navigation } = this.props;
        navigation.addListener(
          'didFocus',
          this.componentDidFocus,
        );
    }
    componentDidFocus(){
    }
    static navigationOptions = {
        headerTitle: "PROFIL",
        headerTintColor: "#fff",
        headerStyle:{
            backgroundColor: NAVIGATION_BAR_COLOR
        }
    }
    componentDidMount(){
        this.setState({
            isLoading: true
        });
        this.props.getUserDate();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isLoading: false
        })
        if (nextProps.userDetails.response){
            let object = nextProps.userDetails.response.userAccount;
            let users =[]
            for(var key in object){
                let obj = {}
                switch(key){
                    case 'email':
                        obj.image = require('../../Assets/images/ic_email_blue.png')
                        break
                    case 'phoneNo':
                        obj.image = require('../../Assets/images/ic_phone_blue.png')
                        break
                    case 'occupation':
                        obj.image = require('../../Assets/images/ic_id_blue.png')
                        break
                    case 'provinceCode':
                        obj.image = require('../../Assets/images/ic_location_blue.png')
                        break
                    default:
                        obj.image = ""
                        break
                }
                obj['title'] = key
                obj['value'] = object[key]
                users.push(obj);
            }
            this.setState({
                users: users
            })
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
            //   const source =  response.uri
              // You can also display the image using data:
              let source = 'data:image/jpeg;base64,' + response.data;
              this.setState({
                imageUrl: source,
              });
              saveProfileImage(this.state.imageUrl)
            }
          });
    }
    render(){
        const imageSource = this.state.imageUrl ? { uri: this.state.imageUrl }:require('../../Assets/images/img_profile_default.png')
        return (
            <ScrollView style = {styles.Main}>
                <Loader isLoading= {this.state.isLoading} />
                <View style = {styles.profileView}>
                    <TouchableHighlight style={styles.roundImage} onPress={this.createImagePicker}>
                        <Image style ={styles.topMainView} width = {120} height ={120} source = {imageSource}/>
                    </TouchableHighlight>
                    <Text style = {styles.userText}>{this.state.username}</Text>
                </View>
                <View style = {styles.listItemsColor}>
                    <FlatList
                        data = {this.state.users}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item, index}) => <UserList user = {item}/>}
                    />
                 </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userDetails: state.profile.userDetailsResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDate:() => {
            dispatch(getUserProfileRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
