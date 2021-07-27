import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    selectPickerHeading: { alignSelf: 'center', fontSize: vh(4), fontWeight: 'bold', marginTop: vh(2) },
    pickerStyle: {
        alignSelf: 'center',
        height: vh(5),
        width: vw(50),
        borderWidth: vh(0.2),
        borderRadius: vh(3),
        marginTop: vh(2)
    },
    pickerText: {
        fontSize: vh(3),
        alignSelf: 'center',
    },
})