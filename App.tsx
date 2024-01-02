import { ThemeProvider } from "styled-components";
import { SafeAreaView, StatusBar, View } from "react-native";
import { theme } from "./src/styles/theme";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { Routes } from "./src/routes";
import { MealProvider } from "./src/context/MealContext";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <MealProvider>
        <SafeAreaView />
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {fontsLoaded ? <Routes/> : <Loading/>}
      </MealProvider>
    </ThemeProvider>
  );
}
