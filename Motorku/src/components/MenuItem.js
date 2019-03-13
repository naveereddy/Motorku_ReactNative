import React, {Component} from 'react';
import { View , StyleSheet, Dimensions,Image, Text, TouchableHighlight} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class MenuItem extends Component {
    constructor(props){
        super(props)
        this.menuSelection = this.menuSelection.bind(this)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.isLoading)
    }
    menuSelection(menuName){
        switch(menuName){
            case 'PRODUK':
                this.props.navigation.navigate('Dealer')
                break;
            default:
                break;
        }
    }
    render(){
        let imageSource = ""
        switch(this.props.itemData.image){
            case 'ic_menu_produk':
                imageSource = require('../Assets/images/ic_menu_produk.png'); 
                break;
            case 'ic_menu_promo':
                imageSource = require('../Assets/images/ic_menu_promo.png'); 
                break;
            case 'ic_menu_dealer':
                imageSource = require('../Assets/images/ic_menu_dealer.png'); 
                break;
            case 'ic_menu_reservation':
                imageSource = require('../Assets/images/ic_menu_reservation.png'); 
                break;
            case 'ic_tracking':
                imageSource = require('../Assets/images/ic_tracking.png'); 
                break;
            case 'ic_asmoid':
                imageSource = require('../Assets/images/ic_asmoid.png'); 
                break;
            default:
                break;
        }
        return(
            <View style = {styles.menuItem}>
                <TouchableHighlight onPress = {() => this.menuSelection(this.props.itemData.text)}>
                    <Image style = {styles.imageShow} source = {imageSource}></Image>
                </TouchableHighlight>
                <Text style = {styles.textShow}>{this.props.itemData.text}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: (width - 40)/3-3,
        height: 150,
        alignItems:'center',
        borderColor:'#ddd', 
        borderWidth:1,
        marginLeft:10 ,
        marginTop: 10,
    },
    imageViewShow:{
        height: 120
    },
    imageShow:{
        height: 120,
        width: (width - 40)/3-10,
        margin: 3, 
    },
    textShow:{
        height: 20
    }
})

