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
    },
})