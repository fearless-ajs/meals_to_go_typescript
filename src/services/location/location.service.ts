import camelcaseKeys from 'camelcase-keys';
import { locations } from "./location.mock";

export const locationRequest = (searchTerm: string) => {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject('Not found')
        }
        resolve(locationMock);
    });
};

export const locationTransform = (result: any) => {
    const formattedResponse = camelcaseKeys(result);
    const { geometry = {} } =  camelcaseKeys(formattedResponse.results)[0];
    const { lat, lng }  =  geometry.location;

    return { lat, lng };
}
