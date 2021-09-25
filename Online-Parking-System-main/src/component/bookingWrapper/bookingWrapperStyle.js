import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    bgColor: {
        backgroundColor: 'white',
        height: '100%'
    },
    myBookingTextView: {
        backgroundColor: 'white',
    },
    myBookingText: {
        fontSize: vh(3.5),
        fontWeight: 'bold',
        marginTop: vh(1),
        marginBottom: vh(1),
        marginLeft: vw(3),
        fontFamily: 'DMSerifDisplay-Regular',
    },
    bookingCard: {
        borderWidth: 2,
        width: '90%',
        borderRadius: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        marginTop: vh(2)
    },
    bookingCardText: {
        alignSelf: 'center',
        width: '80%',
        marginTop: vh(2),
        marginBottom: vh(2),
    },
    deleteIconStyle: {
        height: vh(3),
        width: vh(3),
        alignSelf: 'center',
    },
    deleteIconStyleView: {
        alignSelf: 'center',
        width: '15%',
    },
    textStyle: {
        fontSize: vh(2.2),
        fontWeight: 'bold'
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