import { StyleSheet } from "react-native";
import { alignSelf, marginTop } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../../responsive/responsive";

export default StyleSheet.create({
    tabBarLabelStyle: {
        fontSize: vh(2.5),
        lineHeight: vh(4),
        paddingBottom: vh(0.9)
    },
    tabBarStyle: {
        borderColor: 'white',
    },
    tabBarItemStyle: {
        borderTopLeftRadius: vh(1),
        borderTopRightRadius: vh(1),
    }

})