import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { NAVIGATION_BAR_COLOR } from '../Utils/Colors'

class ProductScreen extends Component {
    static navigationOptions = {
        headerTitle: "BRENDA",
        headerTintColor: "#fff",
        headerStyle:{
            backgroundColor: NAVIGATION_BAR_COLOR
        }
    }
    render(){
        return (
            <View style = {styles.Main}>
                <Text>ProductScreenView</Text>
            </View>
        );
    }
}

const ProductScreens = createStackNavigator({
    BRENDA: ProductScreen
})
export default createAppContainer(ProductScreens);
const styles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});