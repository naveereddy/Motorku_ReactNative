import React, {Component} from 'react';
import { View, Image, Text, NativeModules, Dimensions, FlatList, TouchableHighlight} from 'react-native';
import { NAVIGATION_BAR_COLOR } from '../../Utils/Colors'
import MapView from 'react-native-maps';
import { styles } from "./styles"
import MenuItem from "../../components/MenuItem";

import { HomeMenu } from '../../Utils/HomeMenuIcons'
import Loader from '../../components/Loader'
import ProfileInteractor from '../Profile/ProfileInteractor'

const pInteractor = new ProfileInteractor()

class ProductScreen extends Component {
    constructor(props){
        super(props)
        var manger = NativeModules.myModule 
        manger.simpleFunction("React Native Product catalog screen")
        this.state = {
            isLoading: false,
            location:{
                latitude:0.0,
                longitude:0.0,
            },
            menuList: HomeMenu
        }
        navigator.geolocation.watchPosition(
            (success) => {
                console.log('current location',success.coords)
                this.setState({
                    location:{
                        latitude:success.coords.latitude,
                        longitude:success.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,            
                    }
                })
            },
            (error) =>{
                alert(JSON.stringify(error))
            },
            {
                enableHighAccuracy: true,
                timeout: 20000, 
                maximumAge: 1000,
                distanceFilter:10
            }
        )
    }
    static navigationOptions = {
        headerTitle: "BRENDA",
        headerTintColor: "#fff",
        headerStyle:{
            backgroundColor: NAVIGATION_BAR_COLOR
        }
    }
    componentDidMount(){
        // this.props.getAllDealers()
    }
    render(){
        return (
            <View style = {styles.Main}>
                <Loader isLoading={this.state.isLoading}/>
                <View style = {styles.promoView}></View>
                <View style = {styles.homeGridView}>
                    {
                        HomeMenu.map((data,index) => {
                            return(<MenuItem itemData = {data} index= {index} navigation={this.props.navigation}/>)
                        })
                    }
                </View>
            </View>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         dealers: state.dealer.dealersResponse
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getAllDealers:() => {
//             dispatch(dealerRequest())
//         }
//     }
// }
        // pInteractor.addUser({
        //     name: "naveen",
        //     mobile: "9666922280",
        //     age: 27,
        //     birthday: new Date()
        // });
        // pInteractor.getUser()
                         {/* <MapView 
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation = {true}
                    style = {styles.mapView}
                 /> */}
export default ProductScreen;//connect(mapStateToProps, mapDispatchToProps)
