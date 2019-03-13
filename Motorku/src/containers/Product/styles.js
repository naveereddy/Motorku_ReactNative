import {StyleSheet, Dimensions} from 'react-native'
var {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor: '#fff',
    },
    mapView:{
        height:height,
        width: width
    },
    promoView:{
        flex: 4,
        justifyContent:'center',
        alignItems: 'center',
    },
    homeGridView:{
        flex: 6 ,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
});