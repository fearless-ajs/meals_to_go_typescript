import React, {createContext, ReactNode, useState, useEffect} from "react";
import { locationRequest, locationTransform } from "./location.service";
import {err} from "react-native-svg/lib/typescript/xml";

export const LocationContext = createContext<any>(null);
interface LocationContextProps {
    children: ReactNode;
}

export const LocationContextProvider: React.FC<LocationContextProps> = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (!keyword.length) return;
        locationRequest(keyword.toLocaleLowerCase())
            .then(locationTransform)
            .then((result: any) => {
                setIsLoading(false);
                setLocation(result);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            })
    }, [keyword]);


    const onSearch = (searchKeyWord: string) => {
        setIsLoading(true);
        setKeyword(searchKeyWord);
    }
    
    return <LocationContext.Provider
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
         }}
        >{children}</LocationContext.Provider>
}