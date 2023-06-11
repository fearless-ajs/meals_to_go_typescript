import React from "react";
import {RestaurantScreen} from "../../features/restaurants/screens/restaurant.screen";
import {Text} from "react-native";
import { createStackNavigator, TransitionPresets, StackNavigationProp} from '@react-navigation/stack';

type RestaurantStackParams = {
    Restaurants: undefined;
    RestaurantDetail: undefined;
};
export type RestaurantScreenNavigationProp = StackNavigationProp<
    RestaurantStackParams,
    "Restaurants"
    >;

export const RestaurantStack = createStackNavigator<RestaurantStackParams>();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS
            }}
        >
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}
                options={{ headerShown: false }}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={() => <Text>Restaurant Detail</Text>}
                options={{ headerShown: false }}
            />
        </RestaurantStack.Navigator>
    );
};
