export type IRestaurant = {
    name?: string,
    icon?: string,
    photos?: string[],
    address?: string,
    isOpenNow?: Boolean,
    rating?: number,
    isClosedTemporarily?: Boolean,
    placeId?: string
}