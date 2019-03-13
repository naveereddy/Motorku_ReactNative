import React, {Component} from 'react';
import { View, Image, Text, NativeModules,StyleSheet, Dimensions, FlatList, TouchableHighlight} from 'react-native';


export default class DealerScreen extends Component {
    render(){
        return(
            <Text>Product Screen</Text>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})