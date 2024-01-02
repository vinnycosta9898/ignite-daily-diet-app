import { useNavigation } from '@react-navigation/native'
import { CircleMealStatus } from '../../../../components/CircleMealStatus'
import { MealCardContainer, MealContent, MealHour, Separator, MealName } from './styles'

type MealCardProps = {
    id: string
    hour: string
    meal: string
    isPartOfTheDiet: boolean
}

export function MealCard({ id, hour, meal, isPartOfTheDiet} : MealCardProps){
    const navigation = useNavigation()

    return(
        <MealCardContainer onPress={() => navigation.navigate("meal", {mealId: id, isPartOfTheDiet: isPartOfTheDiet})}>
            <MealContent>
                <MealHour>
                    { hour }
                </MealHour>
                <Separator/>
                <MealName>
                    { meal }
                </MealName>
            </MealContent>
            <CircleMealStatus
                background={isPartOfTheDiet ? "green" : "red"}
            />
        </MealCardContainer>
    )
}