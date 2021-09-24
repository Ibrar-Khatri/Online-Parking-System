import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: '#00bfff',
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: vh(3.3),
        fontFamily: 'Acme-Regular',
        width: vw(80),
    },
    drawerStyle: {
        backgroundColor: 'white',
        maxWidth: 500,
        width: vw(77),
    },
    hamburgerIconView: {
        height: vh(3.5),
        width: vh(3.5),
        marginLeft: vh(2),
    },
    drawerLabelStyle: {
        fontSize: vh(2),
        fontWeight: 'bold'
    }
})