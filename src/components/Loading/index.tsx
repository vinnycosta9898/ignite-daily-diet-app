import { ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";

export function Loading(){
    return(
        <LoadingContainer>
            <ActivityIndicator/>
        </LoadingContainer>
    )
}