import React, {useState} from "react";
import {
    TextProps,
    FlatList,
    View, Pressable, TouchableOpacity
} from "react-native";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import {DefaultTheme, ThemedStyledProps} from "styled-components";
import {Spacer} from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { useContext } from "react";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import {IRestaurant} from "../interfaces/restaurant.interface";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import {Search} from "../components/search.component";
import {
    RestaurantScreenNavigationProp,
} from "../../../infrastructure/navigation/restaurants.navigator";

const RestaurantList = styled(FlatList).attrs({ // Gives us access to attribute on FlatLis
    contentContainerStyle: {
        padding: 16
    },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

type Props = {
    navigation: RestaurantScreenNavigationProp;
};


export const RestaurantScreen: React.FC<Props>  = ({ navigation }) => {

    const { restaurants, isLoading } = useContext(RestaurantContext)

    return <>
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={MD2Colors.blue300} />
                </LoadingContainer>
            )}
            <Search />
            <RestaurantList
                data={restaurants}
                renderItem={(props) => {
                    const { item } = props;
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard  restaurant={item as IRestaurant}/>
                            </Spacer>
                        </TouchableOpacity>

                    );
                }}
                keyExtractor={(item) => (item as { name: string }).name}
            />

        </SafeArea>
    </>
}

