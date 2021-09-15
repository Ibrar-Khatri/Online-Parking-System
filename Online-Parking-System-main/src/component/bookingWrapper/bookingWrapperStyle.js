import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    bgColor: {
        backgroundColor: 'white',
        height: '100%'
    },
    myBookingText: {
        fontSize: vh(4),
        fontWeight: 'bold',
        marginTop: vh(3),
        marginLeft: vw(6)
    },
    outSideCard: {
        marginBottom: vh(2),
    },
    bookingCard: {
        borderWidth: 2,
        width: vw(90),
        height: vh(17),
        marginTop: vh(4),
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: vh(2),
        paddingTop: vh(1.5),
        paddingBottom: vh(1.5),
    },
    textStyle: {
        fontSize: vh(2.5),
        fontWeight: 'bold',
        marginLeft: vw(6),
    },
    imageView: {
        alignItems: 'center',
        marginTop: '25%'
    },
    noBookingYetIcon: {
        height: vh(30),
        width: vh(30),
    },
    noBookingsYetText: {
        fontSize: vh(3),
        fontWeight: 'bold'
    }
})