import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";
import { heightPercentageToDP as vh } from "../../responsive/responsive";
import AddBookingScreen from "./bookingScreen/bookingScreen";




let Stack = createStackNavigator()

function FeatureScreen({ navigation }) {
    return <>
        <Stack.Navigator screenOptions={{
            title: 'Add Booking',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#00bfff',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: vh(3),
            },
        }}>
            <Stack.Screen name='add-booking' component={AddBookingScreen} />
        </Stack.Navigator>
    </>
}


export default FeatureScreen;