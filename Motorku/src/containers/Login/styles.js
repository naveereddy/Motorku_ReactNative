import { StyleSheet, Dimensions } from 'react-native';
import {APP_BLUE_COLOR, WHITE_COLOR, NAVIGATION_BAR_COLOR} from '../../Utils/Colors';
const {height, width} = Dimensions.get('window'); 

export const styles = StyleSheet.create({
    Main:{
        flex:1,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: NAVIGATION_BAR_COLOR,
    },
    closeButton:{
        flex: 10,
        alignItems:'flex-end',
        justifyContent: "flex-end",
        width:width,
    },
    closeImagePosition:{
        marginRight: 40
    },
    textFieldsView:{
        flex: 90,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: NAVIGATION_BAR_COLOR
    },
    margins:{
        marginBottom: 30
    },
    borders:{
        borderBottomColor: WHITE_COLOR,
        borderBottomWidth: 2,
        width: width - 50 
    },
    loginButton:{
        borderRadius: 5,
        borderRadius: 5,
        width: width - 50,
        height: 40,
        backgroundColor:WHITE_COLOR,
        justifyContent:'center',
        alignItems:'center',
    },
    loginText:{
        color: APP_BLUE_COLOR
    },
    fontSizes:{ 
        fontSize: 16,
        fontFamily: 'Proxima Nova',
        fontWeight: 'bold'
    }
});
