import React, {useState, useEffect, createContext, ReactNode, useContext} from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";
import {IRestaurant} from "../../features/restaurants/interfaces/restaurant.interface";
import {LocationContext} from "../location/location.context";


interface RestaurantContextProps {
    children: ReactNode;
}

export const RestaurantContext = createContext<any>(null);

export const RestaurantContextProvider: React.FC<RestaurantContextProps> = ({ children }) => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (locationString: string) => {
        setIsLoading(true);
        setRestaurants([]); // Always reset the old restaurant records.

        setTimeout(() => {
            restaurantsRequest(locationString)
                .then((response: any) => restaurantsTransform(response))
                .then((results: IRestaurant[]) => {
                    setRestaurants(results);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setIsLoading(false);
                });
        }, 2000); // Added delay of 2000ms for demonstration purposes
    };

    useEffect(() => {
        if (location){
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

    return (
        <RestaurantContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
