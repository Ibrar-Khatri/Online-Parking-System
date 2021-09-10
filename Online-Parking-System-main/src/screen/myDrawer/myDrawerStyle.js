import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

console.log(vw(100))

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: '#00bfff',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: vh(2.7),
    },
    drawerStyle: {
        backgroundColor: 'white',
        maxWidth: 500,
        width: vw(77),
    },
    hamburgerIconView: {
        height:vh(5),
        width:vh(4),
        marginLeft: vh(2) 
    },
    drawerLabelStyle: {
        fontSize: vh(2),
        fontWeight:'bold'
    }
})