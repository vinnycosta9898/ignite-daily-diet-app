import { useTheme } from "styled-components";
import { MealStatusContainer, IconContainer, MealStatusColorProps } from "./styles";
import { Feather } from "@expo/vector-icons";
import { RegularText, TitleText } from "../Typegraphy";
import { useNavigation } from "@react-navigation/native";

type MealStatusProps = {
    background: MealStatusColorProps
    isIcon: boolean
    isPercent: boolean
    percentMeal: string
    description: string
    width: number
}

export function MealStatus({ background, isIcon, isPercent, percentMeal, description, width } : MealStatusProps){
    const theme = useTheme()
    const navigation = useNavigation()
    
    return(
        <MealStatusContainer background={background} width={width} onPress={() => navigation.navigate('statiticsMeal', 'green')}>
            <IconContainer>
                {   
                    isIcon ? 
                        <Feather
                            name="arrow-up-right"
                            color={background === 'red' ? theme.COLORS.red_700: theme.COLORS.green_700}
                            size={24}
                        />
                    : 
                    null                
                }
                
            </IconContainer>
            <TitleText color="black">{percentMeal} {isPercent ? '%' : null}</TitleText>
            <RegularText color='black' isBold={false}>{description}</RegularText>
        </MealStatusContainer>
    )
}