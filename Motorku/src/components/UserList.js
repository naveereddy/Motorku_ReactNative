import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native'
import {APP_BLUE_COLOR} from '../Utils/Colors'

const {width,height} = Dimensions.get('window');


export default class extends Component{

    constructor(props){
        super(props)
        console.log(props.user)
    }

    componentWillReceiveProps(nextProps){
        
    }
    render(){
        return(
            <View style = {[styles.main, styles.sideByside]}>
                <View style = {styles.imageViewStyle}>
                { this.props.user.image != ""?
                    <Image style = {styles.imageContainer} source = {this.props.user.image}/>:
                    <Text />
                }
                </View>
                <View style = {styles.textViewContainer}>
                    <Text style = {styles.itemColor}>{this.props.user.title}</Text>
                    <Text style = {styles.itemColor}>{this.props.user.value}</Text>
                </View>
            </View>
        )  
    }
}
const styles = StyleSheet.create({
    main:{
        width:width,
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        shadowOffset: {
            width:0,
            height:0
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        margin:5
    },
    sideByside:{
        flexDirection: 'row'
    },
    imageViewStyle:{
        width: 50,
        borderWidth:1,
        borderColor:'blue'
    },
    imageContainer:{
        marginLeft: 10,
        width: 30,
        height:30,
        marginTop: 10
    },
    textViewContainer:{
        width: width-70
    },
    itemColor:{
        color: APP_BLUE_COLOR,
        marginLeft: 10,
        marginTop: 4,
        overflow:'hidden',
        fontSize: 14,
        fontFamily:'ProximaNova-SemiBold'
    }
});