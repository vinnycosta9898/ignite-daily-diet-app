import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION, MealsProps } from "../storage-config"
import { getAllmealsGroups } from "./getAllMealsGroups"

export async function deleteMeal(mealId: string){
    try{
       const mealsList = await getAllmealsGroups()
       
       const filteredMeals = (mealsList).filter(meal => meal.id !== mealId)

       await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(filteredMeals))

    }catch(err){
        throw err
    }
}