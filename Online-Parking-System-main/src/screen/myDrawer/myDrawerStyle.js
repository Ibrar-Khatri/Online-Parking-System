import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

console.log(vw(100))

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: '#00bfff',
        height: vh(8),
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        lineHeight: vh(4),
        color: 'white',
        fontSize: vh(3.5),
    },
    drawerStyle: {
        backgroundColor: 'white',
        maxWidth: 500,
        width: vw(77)
    },
    hamburgerIconView: { marginLeft: vh(2) }
})