import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

import  ProductScreen from './ProductScreen'
import  MessageScreen from './MessageScreen'
import  ProfileScreen from './ProfileScreen'
import  EmergencyScreen from './EmergencyScreen'
import  SettingScreen from './SettingsScreen'

const tabBar = createBottomTabNavigator({
    PRODUC: ProductScreen,
    PESAN: MessageScreen,
    PROFIL: ProfileScreen,
    DARURAT: EmergencyScreen,
    Settings: SettingScreen
})
export default createAppContainer(tabBar);

const styles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});