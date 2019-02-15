import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class ProfileScreen extends Component {
render(){
    return (
        <View style = {styles.Main}>
            <Text>ProfileScreenView</Text>
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