import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { NAVIGATION_BAR_COLOR } from '../Utils/Colors'

import Loader from '../components/Loader'
import ProfileInteractor from './Profile/ProfileInteractor'

const pInteractor = new ProfileInteractor()

class ProductScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false
        }
        pInteractor.addUser({
            name: "naveen",
            mobile: "9666922280",
            age: 27,
            birthday: new Date()
        });
        pInteractor.getUser()
    }
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
                <Loader isLoading={this.state.isLoading}/>
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