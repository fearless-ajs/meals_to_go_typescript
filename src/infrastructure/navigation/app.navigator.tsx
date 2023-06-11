import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {SafeArea} from "../../components/utility/safe-area.component";
import {Text, TextProps} from "react-native";
import {RestaurantsNavigator} from "./restaurants.navigator";
import {ThemedStyledProps} from "styled-components";
import {DefaultTheme} from "styled-components/native";

// Define the icons used in the bottom tab navigation
type TabIcons = {
    [key: string]: 'md-restaurant' | 'md-map' | 'md-settings';
};

const TAB_ICON: TabIcons = {
    RestaurantsNav: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
};
// Define the screen options for the bottom tab navigation
interface ScreenOptions {
    route: Readonly<{ key: string; name: string; path?: string }> &
        Readonly<{ params?: Readonly<object | undefined> }>;
}


// Create the Settings and Map components
const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);

const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
);


const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }: ScreenOptions) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        marginTop: `${(props: ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.space[3]};`
    };
};

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="RestaurantsNav" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}