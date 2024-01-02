import { ReactNode, createContext, useState } from "react";
import { MealsProps } from "../storage/storage-config";
import uuid from 'react-native-uuid';
import { registerNewMeal } from "../storage/meal/registerNewMeal";
import { getAllmealsGroups } from "../storage/meal/getAllMealsGroups";
import { deleteMeal } from "../storage/meal/deleteMeal";
import { editMeal } from '../storage/meal/editMeal'
import { FormDataProps } from "../screens/NewMeal";

type MealContextData = {
    handleListMeals: () => void
    handleRegisterMeal: (data: MealsProps) => void
    handleDeleteMeal: (mealId: string) => void
    handleEditMeal: (data: FormDataProps) => void
    filterMealById: (mealId: any) => any
    calculatePercentMeal: () => void
    meals: MealsProps[]
    bestSequenceInDiet: number
    percentMealInDiet: number
    percentMealOutDiet: number
}

type MealProviderProps = {
    children: ReactNode
}

export const MealContext = createContext({} as MealContextData)

export function MealProvider({ children } : MealProviderProps ){
    const [meals, setMeals] = useState<MealsProps[]>([])
    const [percentMealInDiet, setPercentMealInDiet] = useState(0)
    const [percentMealOutDiet, setPercentMealOutDiet] = useState(0)
    const [bestSequenceInDiet, setBestSequenceInDiet] = useState(0)

    async function handleListMeals(){
        const mealsList = await getAllmealsGroups()
        console.log(typeof mealsList)
        setMeals(mealsList.filter(Boolean))
    }

    async function handleRegisterMeal(data: MealsProps){
        const meal = {
            id: uuid.v4() as string,
            name: data.name,
            description: data.description,
            date: data.date,
            hour: data.hour,
            isPartOfTheDiet: data.isPartOfTheDiet
        }

        if(meal.isPartOfTheDiet){
            setBestSequenceInDiet(bestSequenceInDiet + 1)
        }

        await registerNewMeal(meal)
    }

    async function handleDeleteMeal(mealId: string){
        await deleteMeal(mealId)

        handleListMeals()
    }

    async function handleEditMeal(data: FormDataProps){
        await editMeal(data)
        
        handleListMeals()
        
    }

    function filterMealById(mealId: string){
        const filteredMeal = meals.filter((meal) => meal.id === mealId)
        return filteredMeal
    }

    async function calculatePercentMeal(){
        const listMeals = await getAllmealsGroups()
        const mealsTotal = listMeals.length
        const mealsInDietTotal = listMeals.filter((meal) => meal.isPartOfTheDiet).length
        const percentMealInDiet = (100 * mealsInDietTotal) / mealsTotal
        const percentMealOutDiet = 100 - percentMealInDiet
        setPercentMealInDiet(percentMealInDiet)
        setPercentMealOutDiet(percentMealOutDiet)
    }
    
    return(
        <MealContext.Provider value={{
                                        handleListMeals, 
                                        handleRegisterMeal, 
                                        handleDeleteMeal, 
                                        handleEditMeal, 
                                        filterMealById,
                                        meals, 
                                        calculatePercentMeal, 
                                        bestSequenceInDiet,
                                        percentMealInDiet, 
                                        percentMealOutDiet 
                                    }}>
            {children}
        </MealContext.Provider>
    )
}   