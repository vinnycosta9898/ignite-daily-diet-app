import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Meal } from '../screens/Meal'
import { NewMeal } from '../screens/NewMeal'
import { EditMeal } from '../screens/EditMeal'
import { StatiticsMeal } from '../screens/StatiticsMeal'
import { MealInDiet } from '../screens/MealInDiet'
import { MealOutDiet } from '../screens/MealOutDiet'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="meal"
                component={Meal}
            />

            <Screen
                name="newMeal"
                component={NewMeal}
            />

            <Screen
                name="editMeal"
                component={EditMeal}
            />

            <Screen
                name="statiticsMeal"
                component={StatiticsMeal}
            />

            <Screen
                name="mealInDiet"
                component={MealInDiet}
            />

            <Screen
                name="mealOutDiet"
                component={MealOutDiet}
            />
        </Navigator>
    )
}