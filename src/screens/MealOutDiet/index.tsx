import { RegularText, TitleText } from "../../components/Typegraphy";
import { MealOutDietContainer, OutDietImage } from "./styles";
import outDiet from '../../assets/out-diet.png'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function MealOutDiet(){
    const navigation = useNavigation()
    return(
        <MealOutDietContainer>
            <TitleText color='red'>
                Que Pena!
            </TitleText>

            <RegularText color='black' isBold={false}>
                Você saiu da dieta dessa vez, mas continue {`\n`} se esforçando e não desista!
            </RegularText>

            <OutDietImage source={outDiet}/>

            <Button
                background="black"
                colorTitle="white"
                title="Ir para a Página Inicial"
                width={191}
                onPress={() => navigation.navigate('home')}
            />
        </MealOutDietContainer>
    )
}