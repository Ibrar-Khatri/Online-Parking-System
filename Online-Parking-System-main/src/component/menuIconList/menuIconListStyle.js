import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
    menuView: {
        marginTop: vh(1),
        marginRight: vh(1),
        width: vw(40),
        height: vh(19),
        borderRadius: vh(1.5)
    },
    menuIcon: {
        width: vh(3.5),
        height: vh(3.5),
    },
    menuItemView:{  
        height: vh(7.5),  
    },
    menuItem: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        height: vh(7),  
    },

    menuItemIcon: {
        height: vh(3.5),
        width: vh(3.5),
        alignItems: 'center',
    },
    menuItemText: {
        marginLeft:vh(1),
        height: vh(3.5),
        fontSize: vh(2.6),
        alignItems: 'center',
    }
});
