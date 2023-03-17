import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabs from "../screens/tabs";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            {/* <Stack.Navigation initialRouteName="Home"> */}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;