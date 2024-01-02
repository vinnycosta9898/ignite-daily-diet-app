import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, MealsProps } from "../storage-config";

export async function getAllmealsGroups(){
    try{
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

        const mealsList : MealsProps[] = storage ? JSON.parse(storage) : []

        return mealsList.filter(Boolean)
    }catch(err){
        throw err
    }
}