export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            home: undefined
            meal: {
                mealId: string
                isPartOfTheDiet: boolean
            }
            newMeal: undefined
            editMeal: {
                mealId: string
            }
            statiticsMeal: string
            mealInDiet: undefined
            mealOutDiet: undefined
        }
    }
}