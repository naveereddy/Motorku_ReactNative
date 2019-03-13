import React, {Component} from 'react';
import { ActivityIndicator, View , StyleSheet, Modal} from 'react-native';

export default class Loader extends Component {
   
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.isLoading)
    }

    render(){
        return(
            <Modal visible = { this.props.isLoading } transparent={true}             animationType="fade"
            animationType="fade">
                <View style = {styles.loaderContainer}>
                    <View style = {styles.loaderView}>
                        <ActivityIndicator size = 'large' color = "#000" />
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    loaderContainer:{
        flex:1,
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent:'space-around',
        zIndex: 100,
        backgroundColor: '#00000040'
    },
    transparentColor:{
        backgroundColor:'#000',
        opacity:.7
    },
    loaderView:{
        width: 90,
        height:80,
        backgroundColor: "#FFF",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})