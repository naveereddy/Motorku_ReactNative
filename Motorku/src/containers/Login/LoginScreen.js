
import React, {Component} from "react"
import {View, TextInput,TouchableHighlight,Text,Image} from "react-native"
import Loader from "../../components/Loader"
import { styles } from "./styles"
import { loginRequest } from '../../Actions/LoginAction'
import { saveAccessToken , saveEmail, saveRefreshToken} from '../../Utils/Constants'

import { connect } from 'react-redux';

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            isLoading: false
        }
        this.loginClicked = this.loginClicked.bind(this);
    }
    loginClicked(){
        this.setState({isLoading: true})
        let email = "mobiledev.astra@gmail.com"
        let encriptPass = "XDDYWVh5N3zMBLg/c3kM+214G3iy8y85e4v9pE/YUdb5uJeL4oZgCjHBkB3hXIQ6WiM9p8KCLfycZF+1UxojTDA5H2/JoJ3xOhTZFQ/0lk9p1s84Y7qzH1+A/ZLLxQpQojLaQ0742drIxcMffi3sO3WPmij1QtaGp7lc2yd6B5Xe4iNUSQI8OLFuIUQUnNAdJ1cvrAXkXDaIkjgYyV7vEcMGbQeA5kF/Zz3AIj6H1fV5IJKoPkMFkh8pB+JAhYRnFwSOez44JPdfT3q1sZ99TqMewanOIzcOO5aPWHO98wsBtfBwAdQjtzctjyeqNgdAQ0MhpJIOYe6Fb4VPJAXtpA=="
        this.setState({
            username:email
        })
        this.props.loginRequest({username: email, password: encriptPass})
    }
    componentWillReceiveProps(nextProps){
        // alert(JSON.stringify(nextProps.loginResponse.response)) 
        this.setState({isLoading: false})
        if (nextProps.loginResponse){
            saveAccessToken(nextProps.loginResponse.response.access_token)
            saveEmail(this.state.username)
            saveRefreshToken(nextProps.loginResponse.response.refresh_token)
            this.props.navigation.goBack()
        }
    }   
    render(){
        return (
          <View style={styles.Main}>
             <Loader isLoading= {this.state.isLoading} />
            <View style={styles.closeButton}>
                <TouchableHighlight style = {styles.closeImagePosition} onPress = {() => this.props.navigation.goBack()}>
                    <Image source={require('../../Assets/images/ic_close_white.png')}/>
                </TouchableHighlight>
            </View>
            <View style={styles.textFieldsView}>
                <TextInput 
                    style = {[styles.margins, styles.borders, styles.fontSizes, styles.textInputColors]} 
                    placeholder = "Email *" 
                    maxLength={50} 
                    returnKeyType='go'
                    placeholderTextColor = '#fff'
                    value = {this.state.username}
                    onChangeText = {(email) => { this.setState({username:email})}}
                    />
                <TextInput  
                    style = {[styles.borders, styles.margins, styles.fontSizes, styles.textInputColors]} 
                    placeholder = "KATA SANDI *" 
                    maxLength={10} 
                    secureTextEntry={true} 
                    returnKeyType='send'
                    placeholderTextColor = '#fff'
                    value = {this.state.password}
                    onChangeText = {(passwordText) => { this.setState({password:passwordText})}}
                    />
                <TouchableHighlight style={styles.loginButton} onPress = {this.loginClicked}>
                    <Text style={[styles.loginText, styles.fontSizes]}>LOGIN</Text>
                </TouchableHighlight>
        </View>
        </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (userData) => {
            dispatch(loginRequest(userData))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        loginResponse: state.login.loginResponse
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
