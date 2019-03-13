/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { NetInfo, View, PushNotificationIOS} from 'react-native';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  clear,
  settingValue
} from './src/Actions/actions'
import SplashScreen from './src/components/SplashScreen';
import MainTabBar from './src/containers/MainTabBar'
import {saveApnsPushToken} from './src/Utils/Constants'


var PushNotification = require('react-native-push-notification');

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        isInternetAvailabel : false,
        animatedTimeCompleted: false
      }
      PushNotification.configure({

      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
          saveApnsPushToken(token.token)
      },
   
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
   
          // process the notification
   
          // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
          notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
   
      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "YOUR GCM (OR FCM) SENDER ID",
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
      popInitialNotification: true,
      requestPermissions: true,
  });
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
    },1000)
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
        <MainTabBar />     
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