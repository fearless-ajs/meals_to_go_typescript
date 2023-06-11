import {mockImages, mocks} from "./mock";
import camelcaseKeys from 'camelcase-keys';

export const restaurantsRequest = (location: string) => {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const mock = mocks[location];
        if (!mock){
            reject('Not found');
        }
        resolve(mock);
    });
}

export const restaurantsTransform = ({ results = [] })  => {
    const mappedResults = results.map((restaurant: any) => {
        restaurant.photos = restaurant.photos.map((p: any) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        });
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_hours === 'CLOSED_TEMPORARILY'
        }
    })
    return camelcaseKeys(mappedResults);
}
