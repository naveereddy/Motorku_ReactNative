
import React, {Component} from "react"
import {View,StyleSheet, TextInput, Dimensions, Button} from "react-native"

const {height, width} = Dimensions.get('window'); 

export default class LoginScreen extends Component {
    render(){
        return (
        <View style={styles.Main}>
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
            <View style={styles.loginButton}>
                <Button 
                    title="Login"  
                    />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    Main:{
        flex: 1,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: '#FF1C31'
    },
    margins:{
        marginBottom: 30
    },
    borders:{
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        width: width - 50 
    },
    loginButton:{
       borderRadius: 5,
       width: width - 50,
       height: 40,
       backgroundColor:"#fff",
    }
});