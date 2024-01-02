const MEALS_COLLECTION = '@ignite-daily-diet'

export type MealsProps = {
    id: string
    name: string
    description: string
    date: string
    hour: string
    isPartOfTheDiet: boolean
}

export { MEALS_COLLECTION }