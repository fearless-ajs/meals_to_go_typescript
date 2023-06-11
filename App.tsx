import * as React from 'react';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";
import {LocationContextProvider} from "./src/services/location/location.context";
import {Navigation} from "./src/infrastructure/navigation";


export default function App() {

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    // Wait for the fonts to load before rendering the app
    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }


  return (
      <>
          <ThemeProvider theme={theme}>
              <LocationContextProvider>
                  <RestaurantContextProvider>
                      <Navigation />
                  </RestaurantContextProvider>
              </LocationContextProvider>
          </ThemeProvider>
      </>
  );
}
