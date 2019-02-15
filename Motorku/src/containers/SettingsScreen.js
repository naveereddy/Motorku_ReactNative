import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class SettingsScreen extends Component {
render(){
    return (
        <View style = {styles.Main}>
            <Text>SettingsScreenView</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});