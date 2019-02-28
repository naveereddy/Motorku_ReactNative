import React, {Component} from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import {APP_BLUE_COLOR} from '../Utils/Colors'

export default class extends Component{

    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){

    }

    render(){
        return(
            <View style = {styles.main}>
                <Text style = {styles.itemColor}>{this.props.user.title}</Text>
                <Text style = {styles.itemColor}>{this.props.user.value}</Text>
                <Text style = {styles.line}/>
            </View>
        )  
    }
}
const styles = StyleSheet.create({
    main:{
        height: 50,
        justifyContent: 'center',

    },
    itemColor:{
        color: APP_BLUE_COLOR,
        marginLeft: 70,
    },
    line:{
        backgroundColor:'#000',
        height:1,
        marginLeft:10,
        marginRight:20
    }
});