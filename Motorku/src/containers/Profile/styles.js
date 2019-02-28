import { StyleSheet, Dimensions } from 'react-native';
import {APP_BLUE_COLOR, WHITE_COLOR, NAVIGATION_BAR_COLOR} from '../../Utils/Colors';
const {height, width} = Dimensions.get('window'); 

export const styles = StyleSheet.create({
    Main:{
        backgroundColor: '#fff'
    },
    profileView:{
        flex:1/3,
        alignItems:'center',
        backgroundColor: NAVIGATION_BAR_COLOR,
        borderColor:NAVIGATION_BAR_COLOR,
        borderWidth: 1,
        width :width,
        paddingTop:10
    },
    roundImage:{
        width:120,
        height:120,
        borderRadius:60
    },
    userText:{
        marginTop: 10,
        color: WHITE_COLOR
    },
    topMainView:{
        zIndex:10
    },
    listItemsColor:{
        color: '#000',
    }
});