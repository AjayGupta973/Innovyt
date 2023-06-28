import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Discount from "./Discount";

const Stack = createNativeStackNavigator();

const RootScreen = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Discount" component={Discount} />
        </Stack.Navigator>
    )
}

export default RootScreen;