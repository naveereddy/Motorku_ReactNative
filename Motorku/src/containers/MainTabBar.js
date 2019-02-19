import React from 'react';
import { StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'

import { NAVIGATION_BAR_COLOR } from '../Utils/Colors'

import  ProductScreen from './ProductScreen'
import  MessageScreen from './MessageScreen'
import  ProfileScreen from './ProfileScreen'
import  EmergencyScreen from './EmergencyScreen'
import  SettingScreen from './SettingsScreen'
import  LoginScreen from './LoginScreen'

const TabBar = createBottomTabNavigator({
    PRODUC: {
        screen: ProductScreen,
        navigationOptions :{
            tabBarLabel: 'PRODUC',
            tabBarIcon: ({ focused }) => {
                const image = focused 
                ? require('../Assets/ic_tabbar_home_selected.png') 
                : require('../Assets/ic_tabbar_home_normal.png')
                return (
                    <Image 
                        source={image}
                    />
                )
            },
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                defaultHandler();
                navigation.navigate('LoginScreen');
            },
        }
    },
    PESAN: {
        screen: MessageScreen,
        navigationOptions :{
            tabBarLabel: 'PESAN',
            tabBarIcon: ({ focused }) => {
                const image = focused 
                ? require('../Assets/ic_tabbar_inbox_selected.png') 
                : require('../Assets/ic_tabbar_inbox_normal.png')
                return (
                    <Image 
                        source={image}
                    />
                )
            }
        }
    },
    PROFIL: {
        screen: ProfileScreen,
        navigationOptions :{
            tabBarLabel: 'PROFIL',
            tabBarIcon: ({ focused }) => {
                const image = focused 
                ? require('../Assets/ic_tabbar_profile_selected.png') 
                : require('../Assets/ic_tabbar_profile_normal.png')
                return (
                    <Image 
                        source={image}
                    />
                )
            }
        }
    },
    DARURAT: {
        screen: EmergencyScreen,
        navigationOptions :{
            tabBarLabel: 'DARURAT',
            tabBarIcon: ({ focused }) => {
                const image = focused 
                ? require('../Assets/ic_tabbar_emer_selected.png') 
                : require('../Assets/ic_tabbar_emer_normal.png')
                return (
                    <Image 
                        source={image}
                    />
                )
            }
        }
    },
    Settings:{
        screen: SettingScreen,
        navigationOptions :{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ focused }) => {
                const image = focused 
                ? require('../Assets/ic_tabbar_settings_selected.png') 
                : require('../Assets/ic_tabbar_settings_normal.png')
                return (
                    <Image 
                        source={image}
                    />
                )
            }
        }
    } 
},{
    tabBarOptions: {
        activeTintColor: NAVIGATION_BAR_COLOR,
        inactiveTintColor: 'gray',
        showIcon: true
    },
}
);
const Screens = createStackNavigator(
{
    TabBar:{
      screen : TabBar
    },
    LoginScreen:{
      screen: LoginScreen
    }  
},
{
   mode: 'modal',
   headerMode: 'none'  
});
export default createAppContainer(Screens);

const styles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});