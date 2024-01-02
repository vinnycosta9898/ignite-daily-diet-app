import { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import { HomeContainer, TextContainer, MealGroupTitleContainer, MealGroupTitle } from "./styles";
import { Header } from "./components/Header";
import { MealStatus } from "../../components/MealStatus";
import { RegularText } from "../../components/Typegraphy";
import { Button } from "../../components/Button";
import { MealCard } from "./components/MealCard";
import { EmpytList } from "./components/EmpytList";
import { useNavigation } from "@react-navigation/native";
import { MealContext } from "../../context/MealContext";

export function Home(){
    const { handleListMeals, calculatePercentMeal, meals, percentMealInDiet } = useContext(MealContext)
    const navigation = useNavigation()

    function handleGoToNewMeal(){
        navigation.navigate("newMeal")
    }

    useEffect(() => {
        handleListMeals()
    }, [])

    useEffect(() => {
        calculatePercentMeal()
    }, [meals])

    return(
        <HomeContainer>
            <Header/>
            <MealStatus 
                background={percentMealInDiet < 50 ? "red" : "green"} 
                isIcon={true}
                isPercent={true}
                percentMeal={percentMealInDiet.toFixed(2)}
                description="das refeições dentro da dieta"
                width={327}
            />
            <TextContainer>
                <RegularText color='black' isBold={false}>Refeições</RegularText>
            </TextContainer>
            <Button
                background='black'
                colorTitle="white"
                title="Nova refeição"
                onPress={handleGoToNewMeal}
                width={327}
            />
            <FlatList
                data={meals}
                keyExtractor={(meal) => meal.id}
                ListEmptyComponent={() => (
                    <EmpytList/>
                )}
                renderItem={( meal ) => (
                    <>
                        <MealGroupTitleContainer>
                            <MealGroupTitle>{meal.item.date}</MealGroupTitle>
                        </MealGroupTitleContainer>
                            <MealCard
                                id={meal.item.id}
                                hour={meal.item.hour}
                                meal={meal.item.name}
                                isPartOfTheDiet={meal.item.isPartOfTheDiet}
                            />
                    </>
                )}
            />
        </HomeContainer>
    )
}