import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: '#00bfff',
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: vh(3),
        fontFamily: 'BerkshireSwash-Regular',
    },
    drawerStyle: {
        backgroundColor: 'white',
        maxWidth: 500,
        width: vw(77),
    },
    hamburgerIconView: {
        height: vh(5),
        width: vh(4),
        marginLeft: vh(2)
    },
    drawerLabelStyle: {
        fontSize: vh(2),
        fontWeight: 'bold'
    }
})