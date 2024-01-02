import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form'
import uuid from 'react-native-uuid';
import { Ionicons } from "@expo/vector-icons";
import { RegularText, TitleText } from "../../components/Typegraphy";
import { NewMealContainer, NewMealHeaderContainer, BackButton, NewMealForm, Row, Column, OptionsButtonsContainer, ButtonContainer, ErrorText } from "./styles";
import { useTheme } from "styled-components";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { OptionButton } from "./components/OptionButton";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { registerNewMeal } from '../../storage/meal/registerNewMeal';
import { MealContext } from '../../context/MealContext';


export type FormDataProps = {
    id: string
    name: string
    description: string
    date: string
    hour: string
    isPartOfTheDiet: boolean
}

export function NewMeal(){
    const theme = useTheme()
    const navigation = useNavigation()
    const { handleListMeals } = useContext(MealContext)
    const {control, handleSubmit, formState: {errors } } = useForm<FormDataProps>()
    const [isPartOfTheDiet, setIsPartOfTheDiet] = useState(false)
    const [firstButtonActive, setFirstButtonActive] = useState(false)
    const [secondButtonActive, setSecondButtonActive] = useState(false)

    function handleActiveButton(buttonId: number){
        if(buttonId === 1){
            setIsPartOfTheDiet(true)
            setFirstButtonActive(!firstButtonActive)
            setSecondButtonActive(false)
        }else{
            setIsPartOfTheDiet(false)
            setSecondButtonActive(!secondButtonActive)
            setFirstButtonActive(false)
        }
    }

    async function handleCreateMeal(data: FormDataProps){
        const meal = {
            id: uuid.v4() as string,
            name: data.name,
            description: data.description,
            date: data.date,
            hour: data.hour,
            isPartOfTheDiet: data.isPartOfTheDiet
        }

        await registerNewMeal(meal)

        if(meal.isPartOfTheDiet){
            navigation.navigate('mealInDiet')
        }else{
            navigation.navigate('mealOutDiet')
        }

        handleListMeals()
    }

    return(
        <NewMealContainer>
            <NewMealHeaderContainer>
                <BackButton onPress={() => navigation.navigate("home")}>
                    <Ionicons
                        name='arrow-back-outline'
                        color={theme.COLORS.gray_100}
                        size={24}
                    />
                </BackButton>

                <TitleText color="black" style={{marginLeft: 50}}>
                    Nova Refeição
                </TitleText>
            </NewMealHeaderContainer>

            <NewMealForm>
                <Row>
                    <RegularText color="black" isBold={true}>Nome</RegularText>
                </Row>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: "Informe o nome da refeição"
                    }}
                    render={({ field : { onChange }}) => (
                        <Input
                            width={327}
                            height={50}
                            onChangeText={onChange}
                        />
                    )}
                />
                <ErrorText>{errors.name?.message}</ErrorText>
                
                <Row>
                    <RegularText color="black" isBold={true}>Descrição</RegularText>
                </Row>

                <Controller
                    control={control}
                    name="description"
                    rules={{
                        required: "Informe a descrição da refeição"
                    }}
                    render={({ field : { onChange }}) => (
                        <Input
                            width={327}
                            height={120}
                            onChangeText={onChange}
                        />
                    )}
                />
                <ErrorText>{errors.description?.message}</ErrorText>
                <Row>
                    <Column>
                        <Row>
                            <RegularText color="black" isBold={true}>Data</RegularText>
                        </Row>

                        <Controller
                            control={control}
                            name="date"
                            rules={{
                                required: "Informe a data da refeição",
                                pattern:{
                                    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/,
                                    message: 'Por favor, insira uma data no formato dd/mm/yyyy'
                                }
                            }}
                            render={({ field: { onChange }}) => (
                                <Input
                                    width={153}
                                    height={50}
                                    onChangeText={onChange}
                                />
                            )}
                        
                        />
                        <ErrorText>{errors.date?.message}</ErrorText>
                    </Column>
                    
                    <Column>
                        <Row>
                            <RegularText color="black" isBold={true}>Hora</RegularText>
                        </Row> 
                        <Controller
                            control={control}
                            name="hour"
                            rules={{
                                required: "Informe o horário da refeição",
                                pattern:{
                                    value: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                                    message: 'Por favor insira um horário no formato HH:MM'
                                }
                                
                            }}
                            render={({ field: {onChange }}) => (
                                <Input
                                    width={153}
                                    height={50}
                                    onChangeText ={onChange}  
                                />
                            )}
                        
                        />
                        <ErrorText>{errors.hour?.message}</ErrorText>
                    </Column>
                </Row>
                <Row>
                    <RegularText color="black" isBold={true}>Está dentro da dieta?</RegularText>
                </Row>
                <OptionsButtonsContainer>
                    <TouchableOpacity onPress={() => handleActiveButton(1)}>
                        <OptionButton 
                            background="green"
                            id={1}
                            isActive={firstButtonActive}
                            title="Sim"
                            handleActiveButton={handleActiveButton}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleActiveButton(2)}>
                        <OptionButton 
                            background="red"
                            id={2}
                            isActive={secondButtonActive}
                            title="Não"
                            handleActiveButton={handleActiveButton}
                        />
                    </TouchableOpacity>
                </OptionsButtonsContainer>

                <ButtonContainer>
                    <Button
                        background="black"
                        colorTitle='white'
                        title="Cadastrar refeição"
                        width={327}
                        onPress={handleSubmit(data => handleCreateMeal({...data, isPartOfTheDiet: isPartOfTheDiet}))}
                    />
                </ButtonContainer>  
            </NewMealForm>
        </NewMealContainer>
    )
}