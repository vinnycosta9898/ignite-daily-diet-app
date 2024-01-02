import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storage-config";
import { getAllmealsGroups } from "./getAllMealsGroups";
import { FormDataProps } from "../../screens/NewMeal";

export async function editMeal(data: FormDataProps){
    try{
        const mealsList = await getAllmealsGroups()

        const updatedMeal = mealsList.map((meal) => {
            if(meal.id === data.id){
                return{
                    ...data
                }
            }

            return meal
        })

        AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedMeal))

        return updatedMeal
    }catch(err){
        console.log(err)
    }
}