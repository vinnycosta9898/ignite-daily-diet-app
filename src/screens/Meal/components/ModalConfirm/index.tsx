import { useContext } from "react";
import { ModalConfirmContainer, Row, } from "./styles";
import { Button } from "../../../../components/Button";
import { TitleText } from "../../../../components/Typegraphy";
import { MealContext } from "../../../../context/MealContext";
import { useNavigation } from "@react-navigation/native";

type ModalConfirmProps = {
    mealId: string
    handleOpenModal: () => void
}

export function ModalConfirm({ mealId, handleOpenModal } : ModalConfirmProps){
    const navigation = useNavigation()
    const { handleDeleteMeal } = useContext(MealContext)

    function deleteMeal(mealId: string){
        handleDeleteMeal(mealId)
        handleOpenModal()
        navigation.navigate('home')
    }

    return(
        <ModalConfirmContainer>
            <TitleText color="black" size="lg">Deseja realmente excluir o {`\n`} registro da refeição?</TitleText>
            <Row>
                <Button
                    background="white"
                    colorTitle="black"
                    title="Cancelar"
                    width={135}
                    onPress={handleOpenModal}                
                />

                <Button
                    background="black"
                    colorTitle="white"
                    title="Sim, excluir"
                    width={135}
                    onPress={() => deleteMeal(mealId)}
                />
            
            </Row>
        </ModalConfirmContainer>
    )
}