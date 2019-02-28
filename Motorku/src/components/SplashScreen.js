import React , {Component} from 'react';
import { Text, Button, ActivityIndicator, Image, View, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {

    render() {
        return (
            <View style = {styles.Main}>
            <Image source={ require('../Assets/images/bg_splash.jpg') } />
            <View style = {styles.LoaderPostion} >
               {this.props.isLoading ?
               <ActivityIndicator size= 'small' /> :
               <View>
                  <Text>Check your internet Connection</Text>
                  <Button title = "Retry"/>
               </View>
               }
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
       backgroundColor: '#fff'
      },
    LoaderPostion:{
      zIndex: 1,
      alignItems:'center',
      marginBottom: 100
    }
  });