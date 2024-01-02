import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, MealsProps } from "../storage-config";
import { getAllmealsGroups } from "./getAllMealsGroups";

export async function registerNewMeal(meal: MealsProps){
    try{
        const storageMeals = await getAllmealsGroups()

        const storage = JSON.stringify([...storageMeals, meal])

        await AsyncStorage.setItem(MEALS_COLLECTION, storage)
    }catch(err){    
        throw err
    }
}