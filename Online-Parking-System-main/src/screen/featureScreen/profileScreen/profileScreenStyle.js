import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../../responsive/responsive";

export default StyleSheet.create({
    bgView: {
        height: vh(30),
        backgroundColor: '#767886',
        borderBottomLeftRadius: vh(2),
        borderBottomRightRadius: vh(2),
    },
    avatarAndTextStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: vw(5),
        marginTop: vh(4),
        display: 'flex',
        alignItems: 'center',
    },
    uploadImageIcon: {
        backgroundColor: 'white'
    },
    editIconView: {
        marginTop: vh(-4),
        marginLeft: vh(10.3),
    },
    editIcon: {
        backgroundColor: 'white'
    },
    textStyle: {
        marginLeft: vw(1),
    },
    nameStyle: {
        color: 'white',
        fontSize: vh(3),
    },
    emailStyle: {
        color: 'white',
        fontSize: vh(2),
    },
    cancelTextStyle:{
        alignSelf:'center',
        justifyContent:'center'  
    }

})