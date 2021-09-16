import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../../responsive/responsive";

export default StyleSheet.create({
    tabBarLabelStyle: {
        fontWeight: 'bold',
        fontSize: vh(2),
        paddingBottom: vh(1)
    },
    tabBarStyle: {
        height: vh(8),
    },
    tabBarItemStyle: {
        paddingTop: vh(1),
        height: vh(8),
    },
    tabsIconStyle: {
        height: vh(3.5),
    }
})