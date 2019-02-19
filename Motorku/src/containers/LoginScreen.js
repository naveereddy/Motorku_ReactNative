
import React, {Component} from "react"
import {View,StyleSheet, TextInput, Dimensions,TouchableHighlight,Text,Image} from "react-native"
import {APP_BLUE_COLOR, WHITE_COLOR, NAVIGATION_BAR_COLOR} from '../Utils/Colors';

const {height, width} = Dimensions.get('window'); 

export default class LoginScreen extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return (
          <View style={styles.Main}>
            <View style={styles.closeButton}>
                <TouchableHighlight onPress = {() => this.props.navigation.goBack()}>
                    <Image style = {styles.closeImagePosition} source={require('../Assets/ic_close_white.png')}/>
                </TouchableHighlight>
            </View>
            <View style={styles.textFieldsView}>
                <TextInput 
                    style = {[styles.margins, styles.borders]} 
                    placeholder = "Email *" 
                    maxLength={50} 
                    returnKeyType='go'
                    placeholderTextColor = '#fff'
                    />
                <TextInput  
                    style = {[styles.borders, styles.margins]} 
                    placeholder = "KATA SANDI *" 
                    maxLength={10} 
                    secureTextEntry={true} 
                    returnKeyType='send'
                    placeholderTextColor = '#fff'
                    />
                <TouchableHighlight style={styles.loginButton}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableHighlight>
        </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    Main:{
        flex:1,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: NAVIGATION_BAR_COLOR,
    },
    closeButton:{
        flex: 10,
        alignItems:'flex-end',
        justifyContent: "flex-end",
        width:width,
    },
    closeImagePosition:{
        marginRight: 40
    },
    textFieldsView:{
        flex: 90,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: NAVIGATION_BAR_COLOR
    },
    margins:{
        marginBottom: 30
    },
    borders:{
        borderBottomColor: WHITE_COLOR,
        borderBottomWidth: 2,
        width: width - 50 
    },
    loginButton:{
        borderRadius: 5,
        borderRadius: 5,
        width: width - 50,
        height: 40,
        backgroundColor:WHITE_COLOR,
        justifyContent:'center',
        alignItems:'center',
    },
    loginText:{
        color: APP_BLUE_COLOR
    }
});