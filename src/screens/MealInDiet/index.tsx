import { MealInDietContainer, InDietImage } from "./styles";
import inDiet from '../../assets/in-diet.png'
import { RegularText, TitleText } from "../../components/Typegraphy";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function MealInDiet(){
    const navigation = useNavigation()
    return(
        <MealInDietContainer>
            <TitleText color='green'>
                Continue Assim
            </TitleText>

            <RegularText color='black' isBold={false}>
                Você contiua dentro da dieta. Muito bem!
            </RegularText>

            <InDietImage source={inDiet}/>

            <Button
                background="black"
                colorTitle="white"
                title="Ir para a Página Inicial"
                width={191}
                onPress={() => navigation.navigate('home')}
            />
        </MealInDietContainer>
    )
}