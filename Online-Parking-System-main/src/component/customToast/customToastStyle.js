import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    toastView: {
        height: vh(8),
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: vw(4),
        paddingRight: vw(4),
    },
    toastIcon: {
        height: vh(3.5),
        width: vh(3.5),
        marginRight: 10
    },
    toastText: {
        fontSize: vh(2),
    },
    success: {
        backgroundColor: "#bcf5bc"
    },
    info: {
        backgroundColor: "#bde6f2"
    },
    error: {
        backgroundColor: "#eeb2b0"
    }
})