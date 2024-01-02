import { useTheme } from "styled-components";
import { TitleText, RegularText } from "../../components/Typegraphy";
import { StatitcicsMealHeaderColorProps, StatiticsMealContainer, StatiticsMealHeader, ButtonContainer, BackButton, StatiticsMain, Row } from "./styles";
import { Ionicons } from '@expo/vector-icons'; 
import { MealStatus } from "../../components/MealStatus";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { MealContext } from "../../context/MealContext";

type StatiticsMealProps = {
    background?: StatitcicsMealHeaderColorProps
}

export function StatiticsMeal({ background="green" } : StatiticsMealProps){
    const theme = useTheme()
    const navigation = useNavigation()
    const { percentMealInDiet, percentMealOutDiet, bestSequenceInDiet, meals } = useContext(MealContext)

    return(
        <StatiticsMealContainer>
            <StatiticsMealHeader background={background}>
                <ButtonContainer>
                    <BackButton onPress={() => navigation.navigate('home')}>
                        <Ionicons
                            name="arrow-back-outline"
                            color={theme.COLORS.green_700}
                            size={24}
                        />
                    </BackButton>
                </ButtonContainer>
                <TitleText color="black">{percentMealInDiet ? percentMealInDiet.toFixed(2) : "0.00"}%</TitleText>
                <RegularText color="black" isBold={false}> das refeições dentro da dieta</RegularText>
            </StatiticsMealHeader>
            <StatiticsMain>
                <TitleText color="black" style={{marginTop: 20}}>Estatísticas Gerais</TitleText>
                <MealStatus 
                    background="gray"
                    isIcon={false}
                    isPercent={false}
                    percentMeal={bestSequenceInDiet.toString()}
                    description="melhor sequência de pratos dentro da dieta"
                    width={327}
                />
                <MealStatus 
                    background="gray" 
                    isIcon={false} 
                    isPercent={false}
                    percentMeal={meals.length.toString()}
                    description="refeições registradas"
                    width={327}
                />
                <Row>
                    <MealStatus
                        background="green"
                        isIcon={false}
                        isPercent={false}
                        percentMeal={meals.filter((meal) => meal.isPartOfTheDiet).length.toString()}
                        description="Refeições dentro da dieta"
                        width={153}
                    />
                    <MealStatus
                        background="red"
                        isIcon={false}
                        isPercent={false}
                        percentMeal={(meals.length - meals.filter((meal) => meal.isPartOfTheDiet).length).toString()}
                        description="Refeições fora da dieta"
                        width={153}
                    />
                </Row>
            </StatiticsMain>
        </StatiticsMealContainer>
    )
}