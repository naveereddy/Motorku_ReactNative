import React, {Component} from 'react';
import { View, Text, Image,TouchableHighlight, ScrollView, FlatList} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import { styles } from "./styles"
import { NAVIGATION_BAR_COLOR} from '../../Utils/Colors';
import  UserList from '../../components/UserList'
import {getUserProfileRequest} from '../../Actions/ProfileAction'
import { connect } from 'react-redux'

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
            avtarImage: {
                uri:'../../Assets/images/img_profile_default.png'
            },
            users:[]
        }
        this.createImagePicker = this.createImagePicker.bind(this);
        const { navigation } = this.props;
        navigation.addListener(
          'didFocus',
          this.componentDidFocus,
        );
    }
    componentDidFocus(){
        // alert('Focus')
    }
    static navigationOptions = {
        headerTitle: "PROFIL",
        headerTintColor: "#fff",
        headerStyle:{
            backgroundColor: NAVIGATION_BAR_COLOR
        }
    }
    componentDidMount(){
        this.props.getUserDate();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.userDetails.response){
            let object = nextProps.userDetails.response.userAccount;
            let users =[]
            for(var key in object){
                let obj = {}
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
              const source =  { uri: response.uri }
              // You can also display the image using data:
            //   let source = 'data:image/jpeg;base64,' + response.data;
              this.setState({
                avtarImage: source,
              });
            }
          });
    }
    render(){
        return (
            <ScrollView style = {styles.Main}>
                <View style = {styles.profileView}>
                    <TouchableHighlight style={styles.roundImage} onPress={this.createImagePicker}>
                        <Image style ={styles.topMainView} source = {this.state.avtarImage}/>
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
