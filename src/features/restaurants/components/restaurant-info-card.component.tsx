import React from "react";
import {StyleSheet, TextProps, View, Image} from "react-native";
import { IRestaurant } from "../interfaces/restaurant.interface";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {Spacer} from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantCard, RestaurantCardCover, Info, Section, SectionEnd, Rating, Icon, Address, Open } from "./restaurant-info-card.styles";

interface IProps {
    restaurant: IRestaurant;
}


export const RestaurantInfoCard: React.FC<IProps> = ({ restaurant = {} }) => {

    const {
        name = "Some Restaurant",
        icon =  "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5} style={styles.card}>
            <RestaurantCardCover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((value, index) => (
                            <SvgXml xml={star} key={`star-${placeId}-${index}`} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <Open xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
})