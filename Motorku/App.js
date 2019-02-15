/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { NetInfo, View} from 'react-native';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  clear,
  settingValue
} from './src/Actions/actions'
import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/containers/LoginScreen'

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        isInternetAvailabel : false,
        animatedTimeCompleted: false
      }
  }
  onValueChange(number){
    if (number == "") {
      this.props.settingValue(0)
    }else{
      const value = parseInt(number);
      this.props.settingValue(value);
    }
  }
  componentWillMount(){
    this.handleInternetConnection()
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({animatedTimeCompleted:true})
    },3000)
  }
  componentWillUnmount(){
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange)

  }
  handleConnectionChange = (connected) => {
    this.setState({
      isInternetAvailabel: connected
    })
  }
  handleInternetConnection(){
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({
        isInternetAvailabel: isConnected
      })
    });
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange)
  }
  render() {
    return (
      <View style = {{flex :1}}>
       { !this.state.animatedTimeCompleted ? 
        <SplashScreen isLoading = { this.state.isInternetAvailabel }/> :
        <LoginScreen />     
      } 
      </View>    
    );
  }
}

const mapStateToProps = state => {
  return {
    calcValue: state.calcValue
  }
}

export default connect(mapStateToProps, { increment, decrement, clear, settingValue })(App)