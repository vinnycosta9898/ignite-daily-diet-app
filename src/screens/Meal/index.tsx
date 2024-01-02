import { useContext, useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../components/Typegraphy";
import { DietCard } from "./components/DietCard";
import { MealContainer, MealHeaderContainer, BackButton, MealContent, MealContentPad, ButtonContainer } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { ModalConfirm } from "./components/ModalConfirm";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealContext } from "../../context/MealContext";

type RouteParams = {
    mealId: string
    isPartOfTheDiet: boolean
}

type MealFilterProps = {
    id: string
    name: string
    description: string
    date: string
    hour: string
    isPartOfTheDiet: boolean
}

export function Meal(){
    const { filterMealById } = useContext(MealContext)
    const theme = useTheme()
    const navigation = useNavigation()

    const route = useRoute()
    const { mealId, isPartOfTheDiet } = route.params as RouteParams

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [meal, setMeal] = useState<MealFilterProps[]>([])

    function handleOpenModal(){
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        const filteredMeal = filterMealById(mealId)
        setMeal(filteredMeal)
    }, [mealId])

    return(
        <MealContainer>
            {modalIsOpen ? <ModalConfirm mealId={mealId} handleOpenModal={handleOpenModal}/>: null}
            <MealHeaderContainer background={isPartOfTheDiet ? "green" : "red"}>
                <BackButton onPress={() => navigation.navigate('home')}>
                    <Ionicons
                        name="arrow-back-outline"
                        color={theme.COLORS.gray_100}
                        size={24}
                    />
                </BackButton>

                <TitleText color="black" style={{position: 'relative', left: 100}}>Refeição</TitleText>
            </MealHeaderContainer>

            <MealContent>
                <MealContentPad>
                    <TitleText color="black" style={{marginBottom: 10}}>{meal.map((item) => item.name)}</TitleText>
                    <RegularText color="black" isBold={false} style={{marginBottom: 10}}>{meal.map((item) => item.description)}</RegularText>

                    <TitleText color="black" size="lg" style={{marginBottom: 10}}>Data e hora</TitleText>
                    <RegularText color="black" isBold={false} style={{marginBottom: 20}}>{meal.map((item) => item.date)} às {meal.map((item) => item.hour)}</RegularText>
                    <DietCard background={isPartOfTheDiet ? "green" : "red"}/>
                </MealContentPad>
                <ButtonContainer>
                    <Button
                        background="black"
                        colorTitle="white"
                        isIcon='edit-3'
                        title="Editar refeição"
                        width={317}
                        onPress={() => navigation.navigate('editMeal', {mealId})}
                    />
                   
                    <Button
                        background="white"
                        colorTitle="black"
                        isIcon='trash-2'
                        title="Excluir refeição"
                        width={317}
                        onPress={handleOpenModal}
                    />
                </ButtonContainer>
                
            </MealContent>
        </MealContainer>
    )
}