import { StyleSheet } from "react-native";
import { alignItems, borderRadius, justifyContent, margin } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    cardStyle: {
        height: vh(60),
        backgroundColor: 'white',
        width: vw(90),
        marginTop: vh(-10),
        borderRadius: 40,
        alignSelf:'center',
        alignItems:'center'
    },
    inputFieldIconStyle: {
        height: vh(4),
        width: vh(4),
        
        marginRight:vw(2),
    },
    inputFieldsStyleView: {
        width: vw(70),
        marginTop:vh(3)
    },
    inputFieldStyle: {
        height: vh(7.5),
        fontSize:vh(2.5),
    },
    buttonStyle: {
        width: vw(40),
        height: vh(6),
        backgroundColor: '#00bfff',
        paddingTop: vh(1),
        marginTop:vh(6)
      },
      buttonText: {
        color: 'white',
        fontSize: vh(2.5),
      },
})