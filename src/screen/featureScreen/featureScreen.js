import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddBookingScreen from "./addBookingScreen/addBookingScreen";
import SelectSlotScreen from "./selectSlotScreen/selectSlotScreen";




let Stack = createStackNavigator()

function FeatureScreen() {
    return <>
        <Stack.Navigator>
            <Stack.Screen name='select-slot' component={SelectSlotScreen} />
            <Stack.Screen name='addBooking' component={AddBookingScreen} />
        </Stack.Navigator>
    </>
}


export default FeatureScreen;